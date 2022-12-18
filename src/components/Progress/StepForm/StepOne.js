import Form from './Form.js'

const selectOptions = {
  title: [
    {value:"ms", name:"小姐"},
    {value:"mr", name:"先生"},
    {value:"mx", name:"不明"}

  ],
  city: [
    { value: "", name: "請選擇縣市" },
    { value: "KLU", name: "基隆市" },
    { value: "TPH", name: "新北市" },
    { value: "TPE", name: "臺北市" },
    { value: "TYC", name: "桃園市" },
    { value: "HSH", name: "新竹縣" },
    { value: "HSC", name: "新竹市" },
    { value: "MAC", name: "苗栗市" },
    { value: "MAL", name: "苗栗縣" },
    { value: "TXG", name: "臺中市" },
    { value: "CWH", name: "彰化縣" },
    { value: "CWS", name: "彰化市" },
    { value: "NTC", name: "南投市" },
    { value: "NTO", name: "南投縣" },
    { value: "YLH", name: "雲林縣" },
    { value: "CHY", name: "嘉義縣" },
    { value: "CHI", name: "嘉義市" },
    { value: "TNN", name: "臺南市" },
    { value: "KHH", name: "高雄市" },
    { value: "IUH", name: "屏東縣" },
    { value: "PTS", name: "屏東市" },
    { value: "ILN", name: "宜蘭縣" },
    { value: "ILC", name: "宜蘭市" },
    { value: "HWA", name: "花蓮縣" },
    { value: "HWC", name: "花蓮市" },
    { value: "TTC", name: "臺東市" },
    { value: "TTT", name: "臺東縣" },
    { value: "PEH", name: "澎湖縣" },
    { value: "KMN", name: "金門縣" },
    { value: "LNN", name: "連江縣" }
  ]
}

function SelectGroup({label, options}){
  return (
    <div className="select-group-container">
        <div className="input-label">{label}</div>
        <div className="select-wrapper">
            <select required>
                  {options.map((option) => {
                    return <option value={option.value} key={option.value}>{option.name}</option>
                  })}
            </select>
        </div>
    </div>
  )
}

function InputGroup({label, type, placeholder, id, name, maxLength}){
  return (
    <div className="input-group-container">
      <div className="input-label">{label}</div>
        <input 
          type={type}
          placeholder={placeholder}
          id={id}
          name={name} 
          maxLength={maxLength} required/>
    </div>
  )
}

export default function StepOne(){
  return (
    <Form>
    <h3 className="form-title">寄送地址</h3>
    <section className="form-body">
     <div className="form-row">
      <SelectGroup 
        label="稱謂"
        options={selectOptions.title} />
      <InputGroup
        label="姓名"
        placeholder="請輸入姓名"
        type="text"
        id="name"
        />
     </div>
     <div className="form-row">
      <InputGroup
        label="電話"
        placeholder="請輸入行動電話"
        type="text"
        id="phone"
        maxLength="10"
        />
      <InputGroup
        label="Email"
        placeholder="請輸入電子郵件"
        type="email"
        id="Email"
        />
     </div>
     <div className="form-row">
      <SelectGroup 
        label="縣市"
        options={selectOptions.city} />
      <InputGroup
        label="地址"
        placeholder="請輸入地址"
        type="text"
        id="address"
        />
     </div>
    </section>
    </Form>

  )
}