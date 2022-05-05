import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Full name</label>
          <input type="text" placeholder="Igbinedion, Eunice" />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Eunnylans" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Eunnylans@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Beautiful" />
        </div>
        <div className="newUserItem">
          <label>Contact Number</label>
          <input type="text" placeholder="+49 15211 8555 55" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Magdeburg | Germany" />
        </div>
        <div className="newUserItem">
          <label>Gender </label>
          <div className="newUserGender">
            <input type="radio" name="Gender" id="sale" value="Male" />
            <label for="male ">Male</label>
            <input type="radio" name="Gender" id="sale" value="Female" />
            <label for="female ">Female</label>
            <input type="radio" name="Gender" id="sale" value="Others" />
            <label for="Other ">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
