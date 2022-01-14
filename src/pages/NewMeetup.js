import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const nav = useNavigate();

  function AddMeetupHandler(meetupDate) {
    fetch(
      "https://react-app-372b7-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupDate),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    ).then(() => {
      nav("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
