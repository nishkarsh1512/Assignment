import { Button, Form, Input, message, Space, Select } from 'antd'
import { Upload } from 'antd'
import axios from 'axios'
import { UploadOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import useInput from './UseInput.js'
const { Option } = Select

const isNotEmpty = (value) => value.trim() != ''

const BasicForm = (props) => {
  const [resume, setResume] = useState()
  const [form] = Form.useForm()
  const [cat, setCat] = useState('')
  const [image, setImage] = useState('')
  const onFinish = async () => {
    console.log(cat)
    ////////////////////////////posting
    await axios
      .post('/', {
        firstName,
        lastName,
        email,
        mobile,
        available,
        company,
        graduated,
        image,
        cat,
        url: 'https://hdhdh.com',
      })
      .then(function (response) {
        console.log(response)
        if ((response.data = 'ok')) {
          message.success('Submit success!')
        } else {
          message.error('Submit failed!')
        }
      })
      .catch(function (error) {
        console.log(error)
        message.error('Submit failed!')
      })
  }
  const onFinishFailed = () => {
    message.error('Submit failed!')
  }
  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    })
  }
  //////////////////////////////////////////////////////////////
  const uploadImage = async (e) => {
    console.log('file reached')
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'nishkarsh')
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/do6iw8pjk/image/upload',
      {
        method: 'POST',
        body: data,
      },
    )
    const file = await res.json()
    console.log(file)
    setImage(file.secure_url)
    console.log(file.secure_url)
  }

  /////////////////////////////////////////////////////////

  const onGenderChange = (value) => {
    if (value != 'other') {
      setCat(value)
      console.log('cat changed')
    }
    switch (value) {
      case 'Entertainment':
        form.setFieldsValue({
          note: 'Hi, man!',
        })
        break
      case 'Science':
        form.setFieldsValue({
          note: 'Hi, lady!',
        })
        break
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        })
        break
      default:
    }
  }
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }

  // const onClick = () => {
  //   axios.post('/', {
  //     name,
  //     url,
  //     category,
  //   })
  // }

  const {
    value: firstName,
    isValid: nameIsValid,
    valueChangeHandler: firstNameChangeHandler,
  } = useInput(isNotEmpty)

  const {
    value: lastName,
    isValid: urlIsValid,
    valueChangeHandler: lastNameChangeHandler,
  } = useInput(isNotEmpty)

  const {
    value: email,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
  } = useInput(isNotEmpty)

  const {
    value: mobile,
    isValid: mobileIsValid,
    valueChangeHandler: mobileChangeHandler,
  } = useInput(isNotEmpty)

  const {
    value: available,
    isValid: availableIsValid,
    valueChangeHandler: availableChangeHandler,
  } = useInput(isNotEmpty)

  const {
    value: company,
    isValid: companyIsValid,
    valueChangeHandler: companyChangeHandler,
  } = useInput(isNotEmpty)

  const {
    value: graduated,
    isValid: graduatedIsValid,
    valueChangeHandler: graduatedChangeHandler,
  } = useInput(isNotEmpty)

  const categoryChangeHandler = (e) => {
    setCat(e.target.value)
  }

  const fileHandler = (e) => {
    setResume(e.target.files[0])
    fileUpload()
  }
  const fileUpload = () => {
    const formData = new FormData()
    formData.append('file', resume)
    // fetch('url', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => {
    //     console.log(response.json())
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  }

  return (
    <div>
      <h1>Upload About Yourself</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          value={firstName}
          onChange={firstNameChangeHandler}
          label="First Name"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your First anme!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          value={lastName}
          onChange={lastNameChangeHandler}
          label="Last Name"
          name="Last Name"
          rules={[
            {
              required: true,
              message: 'Please input your Last Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          value={email}
          onChange={emailChangeHandler}
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          value={mobile}
          onChange={mobileChangeHandler}
          label="Mobile"
          name="mobile"
          rules={[
            {
              required: true,
              message:
                'Please input your username and should contain 10 characters!',
            },
          ]}
        >
          <Input maxLength={10} />
        </Form.Item>
        <Form.Item
          value={available}
          onChange={availableChangeHandler}
          label="Available Date"
          name="userna"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <p>Upload Profile Photo</p>
        <input
          type="file"
          label="Upload Profile Picture"
          name="file"
          onChange={uploadImage}
        ></input>
        <Form.Item
          value={company}
          onChange={companyChangeHandler}
          label="Company Name"
          name="usernme"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <p>Upload Resume</p>
        <input
          type="file"
          name="file"
          label="Upload resume"
          onChange={fileHandler}
        ></input>
        <Form.Item
          value={graduated}
          onChange={graduatedChangeHandler}
          label="College"
          name="uername"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                onChange={categoryChangeHandler}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onFill}>
              Fill
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}
export default BasicForm

// import useInput from '../ise-input.js'
// import axios from 'axios'
// import React, { useEffect } from 'react'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// let value = ''
// const flightNumberIsNotEmpty = (value) => value.trim().length == 10
// const airlineIsNotEmpty = (value) => value.trim().length <= 20
// const destinationIsNotEmpty = (value) => value.trim().length <= 50
// const terminalRule = (value) => Number(value) % 100 == value

// const isValidDate = (value) => Date.parse(value)
// const isValidTime = (value) => value.toString() != ''

// const BasicForm = (props) => {
//   /////////////////////////////////////////////////////////////////////////////////////////
//   //extras
//   const {
//     value: flightNumberValue,
//     isValid: flightNumberIsValid,
//     hasError: flightNumberHasError,
//     valueChangeHandler: flightNumberChangeHandler,
//     inputBlurHandler: flightNumberBlurHandler,
//     reset: resetFlightNumber,
//   } = useInput(flightNumberIsNotEmpty)
//   ///////////////////////////////////////////
//   const {
//     value: airlineValue,
//     isValid: airlineIsValid,
//     hasError: airlineHasError,
//     valueChangeHandler: airlineChangeHandler,
//     inputBlurHandler: airlineBlurHandler,
//     reset: resetAirline,
//   } = useInput(airlineIsNotEmpty)
//   //////////////////////////////////////////////////////////////////////////////
//   //destination
//   const {
//     value: destinationValue,
//     isValid: destinationIsValid,
//     hasError: destinationHasError,
//     valueChangeHandler: destinationChangeHandler,
//     inputBlurHandler: destinationBlurHandler,
//     reset: resetDestination,
//   } = useInput(destinationIsNotEmpty)
//   ////////////////////////////////////////////////////////////////////////
//   //departure date

//   const {
//     value: departureDateValue,
//     isValid: departureDateIsValid,
//     hasError: departureDateHasError,
//     valueChangeHandler: departureDateChangeHandler,
//     inputBlurHandler: departureDateBlurHandler,
//     reset: resetDepartureDate,
//   } = useInput(isValidDate)
//   /////////////////////////////////////////////////////////
//   //departure Time
//   const {
//     value: departureTimeValue,
//     isValid: departureTimeIsValid,
//     hasError: departureTimeHasError,
//     valueChangeHandler: departureTimeChangeHandler,
//     inputBlurHandler: departureTimeBlurHandler,
//     reset: resetDepartureTime,
//   } = useInput(isValidTime)
//   ////////////////////////////////////////////////////////////////////////
//   //Terminal
//   const {
//     value: terminalValue,
//     isValid: terminalIsValid,
//     hasError: terminalHasError,
//     valueChangeHandler: terminalChangeHandler,
//     inputBlurHandler: terminalBlurHandler,
//     reset: resetTerminal,
//   } = useInput(terminalRule)

//   //////////////////////////////////////////////////////////////////////////
//   //GateNumber
//   const {
//     value: gateNumberValue,
//     isValid: gateNumberIsValid,
//     hasError: gateNumberHasError,
//     valueChangeHandler: gateNumberChangeHandler,
//     inputBlurHandler: gateNumberBlurHandler,
//     reset: resetGateNumber,
//   } = useInput(terminalRule)

//   ////////////////////////////////////////////////////////////////////////////////////

//   let formIsValid = false
//   if (
//     flightNumberIsValid &&
//     airlineIsValid &&
//     airlineValue.trim() != '' &&
//     destinationIsValid &&
//     destinationValue.trim() != '' &&
//     terminalIsValid &&
//     terminalValue != 0 &&
//     gateNumberIsValid &&
//     gateNumberValue != 0 &&
//     departureDateIsValid &&
//     departureTimeIsValid
//   ) {
//     formIsValid = true
//   }

//   const formSubmissionHandler = (e) => {
//     e.preventDefault()

//     if (!formIsValid) {
//       return
//     }

//     axios.post('/', {
//       flightNumber: flightNumberValue,
//       airline: airlineValue,
//       destination: destinationValue,
//       terminal: terminalValue,
//       gateNumber: gateNumberValue,
//       departureDate: departureDateValue,
//       departureTime: String(departureTimeValue),
//     })

//     console.log('Submitted Behen ki laudi')
//     resetFlightNumber()
//     resetAirline()
//     resetDestination()
//     resetTerminal()
//     resetGateNumber()
//     resetDepartureDate()
//     resetDepartureTime()
//   }

//   const flightNumberClasses = flightNumberHasError
//     ? 'form-control invalid'
//     : 'form-control'
//   const airlineClasses = airlineHasError
//     ? 'form-control invalid'
//     : 'form-control'
//   const destinationClasses = destinationHasError
//     ? 'form-control invalid'
//     : 'form-control'

//   const terminalClasses = terminalHasError
//     ? 'form-control invalid'
//     : 'form-control'
//   const gateNumberClasses = gateNumberHasError
//     ? 'form-control invalid'
//     : 'form-control'
//   const departureDateClasses = departureDateHasError
//     ? 'form-control invalid'
//     : 'form-control'
//   const departureTimeClasses = departureTimeHasError
//     ? 'form-control invalid'
//     : 'form-control'

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={flightNumberClasses}>
//         <label htmlFor="name">Flight Number</label>
//         <input
//           type="text"
//           id="name"
//           value={flightNumberValue}
//           onChange={flightNumberChangeHandler}
//           onBlur={flightNumberBlurHandler}
//         />
//         {flightNumberHasError && (
//           <p>Flight Number should contain 10 charcters</p>
//         )}
//       </div>

//       <div className={airlineClasses}>
//         <label htmlFor="name">Airline</label>
//         <input
//           type="text"
//           id="name"
//           value={airlineValue}
//           onChange={airlineChangeHandler}
//           onBlur={airlineBlurHandler}
//         />
//         {airlineHasError && (
//           <p>Airline Name Should contain upto 20 charcters</p>
//         )}
//       </div>

//       <div className={destinationClasses}>
//         <label htmlFor="name">Destination</label>
//         <input
//           type="text"
//           id="name"
//           value={destinationValue}
//           onChange={destinationChangeHandler}
//           onBlur={destinationBlurHandler}
//         />
//         {destinationHasError && (
//           <p>Airline Name Should contain upto 50 charcters</p>
//         )}
//       </div>

//       <div className={departureDateClasses}>
//         <label htmlFor="name">Departure Date</label>
//         <input
//           type="date"
//           id="name"
//           value={departureDateValue}
//           onChange={departureDateChangeHandler}
//           onBlur={departureDateBlurHandler}
//         />
//         {departureDateHasError && <p>Departure Date cannot be empty</p>}
//       </div>

//       <div className={departureTimeClasses}>
//         <label htmlFor="name">Departure Time</label>
//         <input
//           type="time"
//           id="name"
//           value={departureTimeValue}
//           onChange={departureTimeChangeHandler}
//           onBlur={departureTimeBlurHandler}
//         />
//         {departureTimeHasError && <p>Departure Time cannot be empty</p>}
//       </div>

//       <div className={terminalClasses}>
//         <label htmlFor="name">Terminal</label>
//         <input
//           type="Number"
//           min="1"
//           id="name"
//           value={terminalValue}
//           onChange={terminalChangeHandler}
//           onBlur={terminalBlurHandler}
//         />
//         {terminalHasError && <p>Terminal should contain upto 2 characters</p>}
//       </div>

//       <div className={gateNumberClasses}>
//         <label htmlFor="name">Gate Number</label>
//         <input
//           type="number"
//           min="1"
//           id="name"
//           value={gateNumberValue}
//           onChange={gateNumberChangeHandler}
//           onBlur={gateNumberBlurHandler}
//         />
//         {gateNumberHasError && (
//           <p>Gate Number should contain upto 2 characters</p>
//         )}
//       </div>

//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//       {/* ////////// */}
//     </form>
//   )
// }

// export default BasicForm

// import React from 'react'
// import { Input } from 'antd'

// const Register = () => <Input placeholder="Basic usage" />

// export default Register

// import React from 'react';
// import { Input } from 'antd';

// const App: React.FC = () => <Input placeholder="Basic usage" />;

// export default App;
