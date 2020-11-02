import React, {useState} from 'react';

function App() {
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");
  const [dict, setDict] = useState({});
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState(undefined);

  const handleSubmit = (evt) => {
      evt.preventDefault();
      const updatedDict = dict;
      updatedDict[word] = description;
      setDict(updatedDict);
      setWord("");
      setDescription("");
  }
  
  const handleSearch = (evt) => {
    evt.preventDefault();
    const searchResult = dict[searchWord];
    setSearchWord("");
    if(searchWord){
      setResult({word: searchWord, description: searchResult});
    }
    else{
      setResult(undefined);
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Word:
        <input
          type="text"
          value={word}
          onChange={e => setWord(e.target.value)}
        />
        Description:
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>

    <form onSubmit={handleSearch}>
      <label>
        Search for word:
        <input
          type="text"
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
        />
      </label>
      <input type="submit" value="Search" />
    </form>
    {
      result && (
        <>
            <div>{result.word}</div>
            <div>{result.description}</div>
        </>
      )
    }
    </>
  );
}

export default App;
