import  headStyle from"./HeadingOne.module.css"
function HeadingOne(){
    return(
        <>
        <div>
            <h1>Heading One</h1>
            <button className={headStyle.headbtn}>Button1</button>
        </div>
        </>
    )
}
 export default HeadingOne;