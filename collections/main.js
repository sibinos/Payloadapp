const Main={
    slug:'main',
    admin: {
        useAsTitle: 'main',
      },
    access:{
        read:()=>true
    },
    fields:[
    {
        name:'mainHeader',
        type:'text'
    },
    {
        name:'subHead',
        type:'text'
    },
    {
        name:'content',
        type:'textarea'
    },
    {
        name:'number',
        type:'number'
    },
    {
        name:'logo' ,
        type:'upload',
        relationTo:'media'
     }
    ]
}
export default Main;