const VaccineData = ({vaccineData}) => {
    return (
        <>
            {
                vaccineData.map((vaccine)=>{
                    const {center_id} = vaccine
                    return(
                        <p>{center_id}</p>
                    )
                })
            }
        </>
    )
}

export default VaccineData