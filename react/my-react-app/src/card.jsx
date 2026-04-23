function card(props)
{
    if(props.isDisplay){
            return (
              <>
                <div className="card">
                  <img src={props.src} alt="pikachu" />
                  <h2 className="card-title">{props.name}</h2>
                  <h2 className="para">Age: {props.age}</h2>
                  <p className="para">{props.desc}</p>
                </div>
              </>
            );
    }

}

export default card;