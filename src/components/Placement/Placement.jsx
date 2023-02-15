import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Placementcard from "../Placement/Placementcard";

import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, FreeMode, Navigation } from "swiper";
import { Modal, Button, Form } from "react-bootstrap";

// Swiper.use()

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import 'swiper/css/effect-fade'

import "bootstrap/dist/css/bootstrap.min.css";
import "../Placement/placement.css";
//import images
import img1 from "../../assests/images/img1.png";
import img2 from "../../assests/images/img2.avif";
import img3 from "../../assests/images/img3.jfif";
import img4 from "../../assests/images/img4.jfif";
import img5 from "../../assests/images/img5.png";
import { useNavigate } from "react-router-dom";
//import { Button } from 'react-bootstrap'
// import img6 from '../../assests/images/img6.jfif'
// import img7 from '../../assests/images/img7.jfif'

export default function Placement() {
  const [show, setShow] = useState(false);

  const [lshow,setlShow]=useState(false);
  const handlelClose=()=>setlShow(false);
const handlelShow=()=>{
  setShow(false);
  setlShow(true);
}

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    setShow(true);
    setlShow(false)
  }

  const [allEvent, setAllEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    staffname: "",
    staffemail: "",
    staffpassword: "",
    staffcontactno: "",
    stafftitle: "",

    // start: "",
    // end: "",
  });
  //validate new staff
  const validate = () => {
    let proceed = true;
    let errormsg = " Please ";
    if (newEvent.staffname == "") {
      proceed = false;
      errormsg += " Enter Your Name";
    }
    if (newEvent.staffemail == "") {
      proceed = false;
      errormsg += " Enter Your Email ID";
    }
    if (newEvent.staffpassword == "") {
      proceed = false;
      errormsg += " Enter Your Password";
    }
    if (newEvent.staffcontactno == "") {
      proceed = false;
      errormsg += " Enter Your Conatct No";
    }
    if (newEvent.stafftitle == "") {
      proceed = false;
      errormsg += " Select Designation";
    }


    // if (newEvent.start == "") {
    //   proceed = false;
    //   errormsg += " Select Start Time";
    // }
    // if (newEvent.end == "") {
    //   proceed = false;
    //   errormsg += " Select End Time";
    // }
    if (!proceed) {
      toast.error(errormsg);
    }else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(newEvent.staffemail)) {
      } else {
        proceed = false;
        toast.warning("Please Enter the Valid Email");
      }
      if (/^([+]\d{2})?\d{10}$/.test(newEvent.staffcontactno)) {
      } else {
        proceed = false;
        toast.warning("Please Enter the Valid ContactNo");
      }
    }
    return proceed;
  };

  //validate duplicate regsiter
    const duplicatevalidate = () => {
      let ok = true;
      for (var i = 0; i < allEvent.length; i++) {
        // console.log("allEvent[i].start", allEvent[i].start);
        // console.log("newEvent.titl", newEvent.title);

        // console.log("start", start);
        // console.log("cvt", new Date(allEvent[i].start).toLocaleString());
        // console.log("cvt start", new Date(start).toLocaleString());
        if (
        newEvent.staffname === allEvent[i].staffname
        ) {
          toast.warning(
            "You Already Registered '" +
              newEvent.staffname +
              "' Please Login"
          );
          ok = false;
        }
      }
      return ok;
    };

  //add new staffs
  const handleaddStaff = () => {
    if (validate()) {
      if(duplicatevalidate()){
        axios.post("http://localhost:3001/placementregister",
        newEvent
          // staffname: staffname,
          // staffemail: staffemail,
          // staffpassword: staffpassword,
          // staffcontactno: staffcontactno,
          // stafftitle: stafftitle,
        ).then((response)=>{
          console.log(response);
          if(response.data.message){

            toast.error("Register Failed :| "+response.data.message)
            console.log('if ');
              }else{
                console.log('else');
                console.log()
                handleClose();
      toast.success("Register Successfully :)" +newEvent.staffname);
      toast.success("Please Login")
                //setloginstatus(response.data[0].username)
                setlShow(true)

              }
        })


      console.log("form data",newEvent)
      setAllEvents([...allEvent, newEvent]);
      setNewEvent({  staffname: "",staffemail: "",staffpassword: "",staffcontactno: "",stafftitle: "", });
    }
    }
  };

  // =================Login============

  const [staffname,setStaffname]=useState("");
  const [staffpassword,setstaffpassword]=useState("");





const[loginstatus,setloginstatus]=useState("");
  const handleloginStaff=()=>{
    axios.post("http://localhost:3001/placementlogin",{
      staffname:staffname,
      staffpassword:staffpassword,
    }).then((response)=>{
      if(response.data.message){
      setloginstatus(response.data.message);
toast.error("Login failed :| "+response.data.message)
console.log('if ');
      }else{
        console.log('else');
        setloginstatus(response.data[0].staffname)
        toast.success("Successfully Login :) " +response.data[0].staffname)
        handlelClose();
        // setstaffpassword
      }
    })

  }

  return (
    <>
      <Header />
      <ToastContainer theme="colored"></ToastContainer>

      <div>
        <h3 id="placementtitle">Our Placement & Traning</h3>
        <div id="placementlogindiv">
          <Button variant="primary" id="placementlogin" onClick={handleShow}>
            Placement Login
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Staff Register</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-grid align-items-left justify-content-left">
              {/* name */}
              <label> Staff Name:</label>

              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
                value={newEvent.staffname}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, staffname: e.target.value })
                }
              />
              {/* Email */}
              <label>Staff Email ID:</label>

              <input
                type="text"
                placeholder="Email ID"
                className="form-control"
                value={newEvent.staffemail}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, staffemail: e.target.value })
                }
              />
              {/* Password */}
              <label>Staff Password:</label>

              <input
                type="text"
                placeholder="Password..."
                className="form-control"
                value={newEvent.staffpassword}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, staffpassword: e.target.value })
                }
              />
              {/* Conatctno */}
              <label>Staff Contact No</label>
              <input
                type="text"
                placeholder="Add ContactNo"
                className="form-control"
                value={newEvent.staffcontactno}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, staffcontactno: e.target.value })
                }
              />
              {/* Designation */}
              <label>Select Your Designation</label>
              <select
                id="lang"
                className="form-control"
                onChange={(e) =>
                  setNewEvent({ ...newEvent, stafftitle: e.target.value })
                }
                value={newEvent.stafftitle}
              >
                <option value="">Select</option>
                <option value="Placement-Aptitude">Placement-Aptitude</option>
                <option value="Placement-Technical">Placement-Technical</option>
                <option value="Placement-Communication">
                  Placement-Communication
                </option>

              </select>


              <Button
                style={{ marginTop: "10px", width: "50%" }}
                variant="success"
                id="placementregister"
                onClick={handleaddStaff}
              >
                Regsiter
              </Button>
              <p>Already Register ?
              <a variant="primary" id="placementlogin" onClick={handlelShow} style={{backgroundColor:"white",color:"blue",textDecoration:"underline",cursor:"pointer"}}>
            Staff Login
          </a>
          </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                id="regclosemodal"
              >
                Close Modal
              </Button>
            </Modal.Footer>
          </Modal>

        {/* =========================== LOGIN MODAL==================================== */}

          <Modal show={lshow} onHide={handlelClose}>


            <Modal.Header closeButton>
              <Modal.Title>Staff Login</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-grid align-items-left justify-content-left">
              {/* name */}
              <label> Staff Name:</label>

              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
                // value={newEvent.staffname}
                onChange={(e) =>
                  setStaffname( e.target.value )
                }
              />
              {/* Email */}
              {/* <label>Staff Email ID:</label>

              <input
                type="text"
                placeholder="Email ID"
                className="form-control"
                value={newEvent.staffemail}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, staffemail: e.target.value })
                }
              /> */}
              {/* Password */}
              <label>Staff Password:</label>

              <input
                type="text"
                placeholder="Password..."
                className="form-control"
                // value={newEvent.staffpassword}
                onChange={(e) =>
                  setstaffpassword( e.target.value)
                }
              />
              {/* Conatctno */}
              {/* <label>Staff Contact No</label>
              <input
                type="text"
                placeholder="Add ContactNo"
                className="form-control"
                value={newEvent.staffcontactno}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, staffcontactno: e.target.value })
                }
              /> */}
              {/* Designation */}
              {/* <label>Select Your Designation</label>
              <select
                id="lang"
                className="form-control"
                onChange={(e) =>
                  setNewEvent({ ...newEvent, stafftitle: e.target.value })
                }
                value={newEvent.stafftitle}
              >
                <option value="">Select</option>
                <option value="Placement-Aptitude">Placement-Aptitude</option>
                <option value="Placement-Technical">Placement-Technical</option>
                <option value="Placement-Communication">
                  Placement-Communication
                </option>

              </select> */}


              <Button
                style={{ marginTop: "10px", width: "50%" }}
                variant="success"
                id="placementregister"
                onClick={handleloginStaff}
              >
                Login
              </Button>
              <p>Not Register ?
              <a variant="primary" id="placementlogin" onClick={handleShow} style={{backgroundColor:"white",color:"blue",textDecoration:"underline",cursor:"pointer"}}>
           Create an Account
          </a></p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                id="regclosemodal"
              >
                Close Modal
              </Button>
            </Modal.Footer>






          </Modal>
        </div>

        <div className="container py-4 px-4 justify-content-center">
          <div className="container py-4 px-4 justify-content-center">
            <h5>Placed Students</h5>
            <Swiper
              //  modules={[N]}
              //modules={[Navigation,Effectfade]}
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode, EffectFade, Navigation]}
              navigation
              effect
              loop
              className="mySwiper"
              // slidesPerView={5}
              // spaceBetween={30}

              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                760: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <Placementcard
                  data={{
                    imgsrc: img4,
                    price: "9Lp/A",
                    title: "MacApp Studio",
                    role: "Java Developer",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Placementcard
                  data={{
                    imgsrc: img2,
                    price: "7Lp/A",
                    title: "L&T",
                    role: "Data Analyst",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Placementcard
                  data={{
                    imgsrc: img3,
                    price: "6Lp/A",
                    title: "Wipro",
                    role: "Testing",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Placementcard
                  data={{
                    imgsrc: img4,
                    price: "4.5Lp/A",
                    title: "TCS",
                    role: "Java Developer",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Placementcard
                  data={{
                    imgsrc: img5,
                    price: "4Lp/A",
                    title: "Ramco Systems",
                    role: "Data Analyst",
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
