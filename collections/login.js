const login={
    slug:'login',
    access:{
        read:()=>true
    },
    admin: {
        useAsTitle: 'login',
    },
    fields:[
        {
            name:'name',
            type:'text'
        },
        {
            name:'email',
            type:'text'
        },
        {name:'password',
        type:'text'
    },
        {
            name:'image' ,
            type:'upload',
            relationTo:'media'
        }
    ]
     
    
}
export default login;