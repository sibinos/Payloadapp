const editor={
  slug:'editor',
  auth:true,
  admin: {
    useAsTitle: 'editor',
  },
  access:{
     update:()=>true,
     read:()=>true,
  },
    fields:[{
        name:'firstName',
        type:'text',
        required:true
    },
        {
        name:'lastName',
        type:'text',
        required:true
        }
    ]
}
export default editor;