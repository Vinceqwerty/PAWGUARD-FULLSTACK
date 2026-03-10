export default function DashboardCard({title,value}){

 return(

   <div style={styles.card}>

     <h3>{title}</h3>

     <p>{value}</p>

   </div>

 )

}

const styles = {

 card:{
   border:"1px solid #ddd",
   padding:"20px",
   margin:"10px",
   borderRadius:"8px",
   width:"200px"
 }

}
