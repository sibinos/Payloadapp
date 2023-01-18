const signup={
    slug:'signUp',
    access:{
        read:()=>true
    },
    admin: {
        useAsTitle: 'sign Up',
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
        {
            name:'password',
            type:'text'
        },
        {
            name:'cofirmPassword',
            type:'text'
        },
        {
            name:'image' ,
            type:'upload',
            relationTo:'media'
        }
    ]
     
    
}
export default signup;