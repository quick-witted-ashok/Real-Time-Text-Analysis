import React, { useState, useEffect } from 'react';
import './App.css';

const TextStatsApp = () => {
  const [text, setText] = useState('');
  const [uniqueWords, setUniqueWords] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [replaceValue, setReplaceValue] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  // Count unique words (case-insensitive)
  const countUniqueWords = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    return words ? new Set(words).size : 0;
  };

  // Count characters excluding spaces and punctuation
  const countChars = (text) => {
    return (text.match(/[a-zA-Z0-9]/g) || []).length;
  };

  // Highlight the latest replaced string
  const highlightLatestReplacedWord = (inputText, search, replace) => {
    if (!search) return inputText;

    const lastIndex = inputText.lastIndexOf(replace);
    if (lastIndex === -1) return inputText;

    return (
      <>
        {inputText.slice(0, lastIndex)}
        <span className="highlight">{replace}</span>
        {inputText.slice(lastIndex + replace.length)}
      </>
    );
  };

  // Update statistics dynamically as user types
  useEffect(() => {
    setUniqueWords(countUniqueWords(text));
    setCharCount(countChars(text));
    setHighlightedText(text); // Reset highlights when typing
  }, [text]);

  // Handle string replacement and highlight only the latest replaced word
  const handleReplace = () => {
    const replacedText = text.replace(searchValue, replaceValue);
    setText(replacedText);
    const highlighted = highlightLatestReplacedWord(replacedText, searchValue, replaceValue);
    setHighlightedText(highlighted);
  };

  return (
    <div className="text-stats-app">
      <button className="dark-mode-toggle" onClick={() => document.body.classList.toggle('dark-mode')}>
        Toggle Dark Mode
      </button>

      <div className="textarea-container">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setHighlightedText(e.target.value); // Reset highlights when typing
          }}
          placeholder="Type your text here..."
        ></textarea>
        <div className="highlighted-text">{highlightedText}</div>
      </div>

      <div className="stats">
        <p>Unique Words: <span>{uniqueWords}</span></p>
        <p>Character Count (Excluding Spaces & Punctuation): <span>{charCount}</span></p>
      </div>

      <div className="replacement">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search String"
        />
        <input
          type="text"
          value={replaceValue}
          onChange={(e) => setReplaceValue(e.target.value)}
          placeholder="Replace With"
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
};

export default TextStatsApp;
