const Tag = ({props}) => {

    return(
      <div className={`inline-flex p-1 mx-1 z-10 mb-1 font-mono text-sm ${props.color} rounded-md`}>{props.name} </div>
    )

}

export default Tag;