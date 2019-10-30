import React, { useState, useEffect } from "react";
import * as contentful from 'contentful';
const client = contentful.createClient({
    space: '62m479wlvf41',
    accessToken: '6d81a6032aa5c4efc5d0c169996a11ea895ca9e95c966b8e7af40d30903ae81b' })
export const Applications= () =>  {
    const initialValue = [];
    const [documents, setDocuments] = useState(initialValue);

    useEffect( () => {
        const getDocuments = () => {
            client.getEntries().then(entries => {
    let passDocuments = entries.items.filter(x=>{
        return typeof x.fields.docTitle !== 'undefined'
    });
    console.log(passDocuments);
                setDocuments(passDocuments)
            })
        };

        getDocuments();
    }, [documents]);

return(<div style={{marginBottom:'50px'}}><div className="textBlock">

{documents.map((doc, i) => (
    <div>
    <p className="leadTitle mediumText">{doc.fields.docTitle}</p>
<p> 
{doc.fields.docInfo}
</p>

<a href={doc.fields.doc.fields.file.url} className="btn btn-default">Download Veteran Application</a>
{i !== documents.length-1 ? <p className="rule"></p>: ''}
    
          </div>  
        ))}

</div></div>
);
}
export default Applications;