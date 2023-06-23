
function Definition({definition}: {definition: any}) {
  return (
    <div>
        <h2>
            {definition.word} {definition.phonetic}
        </h2>
        <Meanings meanings={definition.meanings} />
        <p className="ref">
            <span>
                source: {definition.sourceUrls.at(0)}
            </span>
            <span>
                license: {definition.license.name}
            </span>
        </p>
        <hr />
    </div>
  )
}

function Meanings({meanings}: {meanings: any}) {
    return <>
        {meanings && meanings.map((meaning: any,index: number) => {
            return <div key={index}>
                <h4>{meaning.partOfSpeech}</h4>
                <ol>
                    <MeaningDefinition definitions={meaning.definitions} />
                </ol>
            </div>
        })}
        <hr />
    </>
}

function MeaningDefinition({definitions}: {definitions: any}) {
    // console.log(definitions)
    return <>
        {definitions && definitions.map((definition: any,index: number) => {
            return <li key={index}>
                {definition.definition}
                {definition.example && <span className="example"><br />Example: {definition.example}</span>}
            </li>
        })}
    </>
}

export default Definition
