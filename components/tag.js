const Tag = ({props}) => {

    return(
      <div className={`inline-flex p-1 mx-1 font-mono text-sm bg-${props.color}-200 rounded-md`}>{props.name} </div>
    )

}

export default Tag;