import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state={
      jenjang : 'Pilih Jenjang',
      tingkatan:[],
      Pradasar :['PAUD (Pendidikan Anak Usia Dini)','TK (Taman Kanak-Kanak)','RA (Raudatul Athfal)'],
      Dasar : ['SD (Sekolah Dasar)','MI (Madrasah Ibtidaiyah)','SMP (Sekolah Menengah Pertama)','MTs (Madrasah Tsanawiyah)'],
      Menengah : ['SMA (Sekolah Menengah Atas)', 'MA (Madrasah Aliyah)','SMK(Sekolah Menengah Kejuruan)'],
      Tinggi : ['D3 Diploma','S1/D4 Sarjana' ,'S2 Magister','S3 Doktoral']
    }

  }
  pradasar(){
    this.setState({tingkatan:this.state.Pradasar})
    this.setState({jenjang:'Pendidikan Pra Sekolah'})
  }
  dasar(){
    this.setState({tingkatan:this.state.Dasar})
    this.setState({jenjang:'Pendidikan Dasar'})
  }
  menengah(){
    this.setState({tingkatan:this.state.Menengah})
    this.setState({jenjang:'Pendidikan Menengah'})
  }
  tinggi(){
    this.setState({tingkatan:this.state.Tinggi})
    this.setState({jenjang:'Pendidikan Tinggi'})
  }
  render() {
  
    const data = this.state.tingkatan.map((item,index)=>{
      var listtingkatan = [item];
      return <li key={index}>{listtingkatan}</li>
    })
  
    return (
      <div className="container">
        <p><div className='dropdown'>
          <button className='btn btn-success dropdown-toggle' data-toggle='dropdown'>
            <p>{this.state.jenjang} <div className='caret'></div> </p></button>
          <ul className='dropdown-menu'>
            <li><a href='#1' onClick={()=>{this.pradasar();}}> Pendidikan Pra Sekolah</a></li>
            <li><a href='#2' onClick={()=>{this.dasar();}}> Pendidikan Dasar </a> </li>
            <li><a href='#3' onClick={()=>{this.menengah();}}> Pendidikan Menengah </a> </li>
            <li><a href='#4' onClick={()=>{this.tinggi();}}> Pendidikan Tinggi </a> </li>
          </ul>
        </div>
        </p>

        <h1>{this.state.jenjang}</h1>
        {data}
        </div>

    );
  }
}

export default App;