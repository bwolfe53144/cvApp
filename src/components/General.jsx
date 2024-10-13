import './App.css'

export default function GeneralInfo({person, setPerson}) {


  function handleFullNameChange(e) {
    setPerson({
      ...person,
      fullName: e.target.value
    });
  }

  function handleAddressChange(e) {
    setPerson({
      ...person,
      address: e.target.value
    });
  }

  function handlePhoneNumberChange(e) {
    setPerson({
      ...person,
      phoneNumber: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  function handleBirthdayChange(e) {
    setPerson({
      ...person,
      birthday: e.target.value
    });
  }

  function handleLocationChange(e) {
    setPerson({
      ...person,
      location: e.target.value
    });
  }

  return(
    <form> 
      <label>
        Full name:
        <input
          value={person.fullName}
          onChange={handleFullNameChange}
        />
      </label>
      <label>
        Address:
        <input
          value={person.address}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        City, State, and Zipcode:
        <input
          value={person.location}
          onChange={handleLocationChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          value={person.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
    </form>
  )
}
