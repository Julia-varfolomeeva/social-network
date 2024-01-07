 let initialState={
    dialogs: [
        {
          id: 1,
          name: "Andrey",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
        {
          id: 2,
          name: "Roma",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
        {
          id: 3,
          name: "Sergey",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
      ],
 }
 
 const siteBarReducer =(state= initialState, action)=>{
return state
}
export default siteBarReducer;