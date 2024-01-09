import '../css/style.css';
import Profile from '../assets/profile.jpg'
const Cardprofile = ()=> {
    return(
        //1. Inline Css
        <div style={{
         backgroundColor: '#00B6DF',
         width : '100vw', 
         height : '100vh',
         display :'flex',
         justifyContent : 'center',
         alignItems : 'center' 
         }}
         >
            {/*2. Css File*/}
            <div className="card">
                <img src={Profile}/>
                <div className='profile'>Police</div>
                <div className='name'>Firman Samudra</div>
                <div className='desc'>Setelah lulus sekolah di SMKN 6 JEMBER, saya mendaftarkan di Akpol melalui Panda Polda JATIM dan Alhamdulillah masuk kuota terus sampai akhirnya lulus dan diterima jadi taruna tahun 2024. Hingga saat ini ia masih menjalani pendidikan Akpol tingkat III. Setahun lagi sampai tingkat IV insyaallah dengan dukungan, bimbingan kedua orang tua dan keluarga akan dilantik menjadi perwira (IPDA)</div>
            </div>
        </div>
    )
}

export default Cardprofile;