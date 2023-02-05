import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Placementcard from "../Placement/Placementcard";

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
//import { Button } from 'react-bootstrap'
// import img6 from '../../assests/images/img6.jfif'
// import img7 from '../../assests/images/img7.jfif'

export default function Placement() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newEvent, setNewEvent] = useState({
    name: "",
    email: "",
    password: "",
    contactno: "",
    title: "",
    // start: "",
    // end: "",
  });
  //validate new staff
  const validate = () => {
    let proceed = true;
    let errormsg = " Please ";
    if (newEvent.name == "") {
      proceed = false;
      errormsg += " Enter Your Name";
    }
    if (newEvent.email == "") {
      proceed = false;
      errormsg += " Enter Your Email ID";
    }
    if (newEvent.password == "") {
      proceed = false;
      errormsg += " Enter Your Password";
    }
    if (newEvent.contactno == "") {
      proceed = false;
      errormsg += " Enter Your Conatct No";
    }
    if (newEvent.title == "") {
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
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(newEvent.email)) {
      } else {
        proceed = false;
        toast.warning("Please Enter the Valid Email");
      }
      if (/^([+]\d{2})?\d{10}$/.test(newEvent.contactno)) {
      } else {
        proceed = false;
        toast.warning("Please Enter the Valid ContactNo");
      }
    }
    return proceed;
  };

  //validate duplicate regsiter
  //   const duplicatevalidate = () => {
  //     let ok = true;
  //     for (var i = 0; i < allEvent.length; i++) {
  //       console.log("allEvent[i].start", allEvent[i].start);
  //       console.log("newEvent.titl", newEvent.title);

  //       console.log("start", start);
  //       console.log("cvt", new Date(allEvent[i].start).toLocaleString());
  //       console.log("cvt start", new Date(start).toLocaleString());
  //       if (
  //         new Date(allEvent[i].start).toLocaleString() ===
  //           new Date(start).toLocaleString() &&
  //         newEvent.title === allEvent[i].title
  //       ) {
  //         toast.warning(
  //           "Your Selected Technician '" +
  //             newEvent.title +
  //             "' Busy that Start Time! TRY ANOTHER START TIME"
  //         );
  //         ok = false;
  //       }
  //     }
  //     return ok;
  //   };

  //add new staffs
  const handleaddStaff = () => {
    if (validate()) {
      handleClose();
      toast.success("ok");
    }
  };

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
                value={newEvent.name}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, name: e.target.value })
                }
              />
              {/* Email */}
              <label>Staff Email ID:</label>

              <input
                type="text"
                placeholder="Email ID"
                className="form-control"
                value={newEvent.email}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, email: e.target.value })
                }
              />
              {/* Password */}
              <label>Staff Password:</label>

              <input
                type="text"
                placeholder="Password..."
                className="form-control"
                value={newEvent.password}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, password: e.target.value })
                }
              />
              {/* Conatctno */}
              <label>Staff Contact No</label>
              <input
                type="text"
                placeholder="Add ContactNo"
                className="form-control"
                value={newEvent.contactno}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, contactno: e.target.value })
                }
              />
              {/* Designation */}
              <label>Select Your Designation</label>
              <select
                id="lang"
                className="form-control"
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                value={newEvent.title}
              >
                <option value="">Select</option>
                <option value="Placement-Aptitude">Placement-Aptitude</option>
                <option value="Placement-Technical">Placement-Technical</option>
                <option value="Placement-Communication">
                  Placement-Communication
                </option>
                {/* <option value="B4">B4</option>
            <option value="B5">B5</option> */}
              </select>
              {/* <label>Start Time</label> */}
              {/* <DatePicker
            placeholderText="start"
            className="form-control"
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mmaa"
            timeIntervals={60}
            // dateFormat="dd/MM/yyyy"
            // style={{marginRight:"10px"}}
           // selected={newEvent.start}
           // onChange={(start) => setNewEvent({ ...newEvent, start })}
            //filterDate={isWeekday}
          /> */}
              {/* <label>End Time</label> */}
              {/* <DatePicker
            placeholderText="End"
            className="form-control"
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mmaa"
            timeIntervals={60}
           // selected={newEvent.end}
            //onChange={(end) => setNewEvent({ ...newEvent, end })}
            //filterDate={isWeekday}
          /> */}

              <Button
                style={{ marginTop: "10px", width: "50%" }}
                variant="success"
                id="placementregister"
                onClick={handleaddStaff}
              >
                Regsiter
              </Button>
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
