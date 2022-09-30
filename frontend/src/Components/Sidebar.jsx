import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {


  const box2 = [
    {
      icon: "stopwatch",
      title: "Track",
      location: "/dashboard/track",
    },
    { icon: "briefcase", title: "Projects", location: "/dashboard/projects" },
    {
      icon: "bar-chart",
      rIcon: "bi-chevron-down",
      marginLeft: "65px",
      title: "Reports",
      location: "/dashboard/track",
    },
    {
      icon: "folder",
      rIcon: "bi-chevron-down",
      marginLeft: "72px",
      title: "Clients",
      location: "/dashboard/track",
    },
    {
      icon: "people",
      rIcon: "bi-chevron-down",
      marginLeft: "82px",
      title: "Team",
      location: "/dashboard/track",
    },
  ];

  const box4 = [
    { icon: "question-circle", title: "Help", location: "#" },
    { icon: "phone", title: "Apps", location: "#" },
    { icon: "bell", title: "What's new", location: "#" },
    {
      icon: "person",
      rIcon: "chevron-up",
      marginLeft: "41px",
      title: "User Name",
      location: "#",
    },
  ];

  return (
    <div className="sidebar">
      <div className="box1">
        <i
          style={{ marginLeft: "20px", fontSize: "20px" }}
          class="bi bi-grid-3x3-gap-fill"
        ></i>
        <img
          className="logo"
          src="https://app.myhours.com/assets/myhours_app_logo_icon.svg"
          alt="logo"
        />
      </div>

      <div className="box2">
        {box2.map((item) => (
          <div className="items">
            <Link style={{ width: "100%" }} to={item.location}>
              {" "}
              <i
                style={{ marginLeft: "20px", fontSize: "18px" }}
                class={`bi-${item.icon}`}
              >
                {" "}
              </i>
              <span className="title">{item.title}</span>{" "}
              <i
                style={{ marginLeft: `${item.marginLeft}`, fontSize: "15px" }}
                class={`${item.rIcon}`}
              >
                {" "}
              </i>
            </Link>
          </div>
        ))}
      </div>

      <div className="box3">
        <h5
          style={{
            width: "80%",
            margin: "auto",
            fontSize: "15px",
            paddingTop: "15px",
          }}
        >
          Pro trial expires in 13 days.
        </h5>
        <h3
          style={{
            marginLeft: "20px",
            fontSize: "21px",
            fontWeight: "500",
            marginTop: "2px",
          }}
        >
          Keep/leave the Pro
        </h3>
      </div>

      <div className="box4">
        {box4.map((item) => (
          <div key={item.title}>
            <div className="items">
              <Link  style={{ width: "100%" }} to={item.location}>
                {" "}
                <i
                  style={{ marginLeft: "20px", fontSize: "18px" }}
                  className={` bi-${item.icon}`}
                ></i>
                <span className="title">{item.title}</span>{" "}
                <i
                  style={{ marginLeft: `${item.marginLeft}`, fontSize: "15px" }}
                  className={`bi-${item.rIcon}`}
                ></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

