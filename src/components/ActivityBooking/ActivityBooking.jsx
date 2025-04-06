import { useState } from "react";
import Attachment from "../../assets/svg/Paperclip.svg";
import Send from "../../assets/svg/send-2.svg";
import ArrowLeft from "../../assets/svg/arrow-left.svg";
import ArrowRight from "../../assets/svg/arrow-right.svg";

import "./styles.scss";

const ActivityBooking = () => {
  const [currentMonth, setCurrentMonth] = useState("July 2025");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  // Calendar data for July 2025
  const calendarData = [
    [
      { date: 27, status: "disabled" },
      { date: 28, status: "disabled" },
      { date: 29, status: "disabled" },
      { date: 30, status: "disabled" },
      { date: 1, status: "occupé" },
      { date: 2, status: "occupé" },
      { date: 3, status: "libre" },
    ],
    [
      { date: 4, status: "occupé" },
      { date: 5, status: "libre" },
      { date: 6, status: "libre" },
      { date: 7, status: "libre" },
      { date: 8, status: "libre" },
      { date: 9, status: "libre" },
      { date: 10, status: "libre" },
    ],
    [
      { date: 11, status: "occupé" },
      { date: 12, status: "libre" },
      { date: 13, status: "libre" },
      { date: 14, status: "libre" },
      { date: 15, status: "occupé" },
      { date: 16, status: "occupé" },
      { date: 17, status: "occupé" },
    ],
    [
      { date: 18, status: "libre" },
      { date: 19, status: "libre" },
      { date: 20, status: "occupé" },
      { date: 21, status: "libre" },
      { date: 22, status: "libre" },
      { date: 23, status: "libre" },
      { date: 24, status: "libre" },
    ],
    [
      { date: 25, status: "libre" },
      { date: 26, status: "libre" },
      { date: 27, status: "libre" },
      { date: 28, status: "libre" },
      { date: 29, status: "libre" },
      { date: 30, status: "libre" },
      { date: 31, status: "libre" },
    ],
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handlePrevMonth = () => {
    // In a real app, this would change the calendar data
    setCurrentMonth("June 2025");
  };

  const handleNextMonth = () => {
    // In a real app, this would change the calendar data
    setCurrentMonth("August 2025");
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleClearAll = () => {
    setName("");
    setEmail("");
    setMessage("");
    setFileName("");
  };

  return (
    <div className="activity-booking">
      <div className="section-header">
        <div className="line">
          <span></span>
        </div>
        <h2 className="main-title">NOS ACTIVITÉS</h2>
        <div className="line">
          <span></span>
        </div>
      </div>
      <div className="activity-booking__calendar">
        <div className="activity-booking__calendar-header">
          <button
            onClick={handlePrevMonth}
            className="activity-booking__nav-button"
          >
            <img src={ArrowLeft} width={20} />
          </button>
          <h2 className="activity-booking__month-title">{currentMonth}</h2>
          <button
            onClick={handleNextMonth}
            className="activity-booking__nav-button"
          >
            <img src={ArrowRight} width={20} />
          </button>
        </div>

        <div className="activity-booking__calendar-grid">
          {daysOfWeek.map((day) => (
            <div key={day} className="activity-booking__weekday">
              {day}
            </div>
          ))}

          {calendarData.flat().map((day, index) => (
            <div
              key={index}
              className={`activity-booking__day activity-booking__day--${day.status}`}
            >
              <div className="activity-booking__date">{day.date}</div>
              {day.status !== "disabled" && (
                <div className="activity-booking__status">{day.status}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="activity-booking__form">
        <div className="activity-booking__form-group">
          <label className="activity-booking__label">Nom:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez votre nom"
            className="activity-booking__input"
          />
        </div>

        <div className="activity-booking__form-group">
          <label className="activity-booking__label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre e-mail"
            className="activity-booking__input"
          />
        </div>

        <div className="activity-booking__form-group">
          <label className="activity-booking__label">Message:</label>

          <div className="activity-booking__editor">
            <div className="activity-booking__editor-toolbar">
              <button className="activity-booking__editor-button">
                <span className="activity-booking__editor-button--bold">
                  H6
                </span>
              </button>
              <div className="activity-booking__editor-divider"></div>
              <button className="activity-booking__editor-button activity-booking__editor-button--bold">
                B
              </button>
              <button className="activity-booking__editor-button activity-booking__editor-button--italic">
                I
              </button>
              <button className="activity-booking__editor-button activity-booking__editor-button--underline">
                U
              </button>
              <div className="activity-booking__editor-divider"></div>
              <button className="activity-booking__editor-button">≡</button>
              <button className="activity-booking__editor-button">≡≡</button>
              <button className="activity-booking__editor-button">≡≡≡</button>
              <div className="activity-booking__editor-divider"></div>
              <button className="activity-booking__editor-button">•</button>
              <button className="activity-booking__editor-button">1.</button>
              <button className="activity-booking__editor-button">□</button>
            </div>
            <div className="activity-booking__editor-content">
              <div className="activity-booking__editor-heading">Heading 6</div>
              <div className="activity-booking__editor-text">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to
              </div>
            </div>
          </div>
        </div>

        <div className="activity-booking__form-group">
          <label className="activity-booking__label">Fichier:</label>
          <div className="activity-booking__file-upload">
            <label className="activity-booking__file-label">
              <img src={Attachment} width={20} />
              <span>Pièce jointe</span>
              <span className="activity-booking__file-hint">
                {fileName ? fileName : "(fichiers pdf uniquement)"}
              </span>
              <input
                type="file"
                accept=".pdf"
                className="activity-booking__file-input"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <div className="activity-booking__actions">
          <button
            onClick={handleClearAll}
            className="activity-booking__button activity-booking__button--secondary"
          >
            Clear All
          </button>
          <button className="activity-booking__button activity-booking__button--primary">
            Envoyer
            <img src={Send} width={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityBooking;
