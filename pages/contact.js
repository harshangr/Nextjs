import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [sent, setSent] = useState(false)
  function submit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.message) return alert('Please complete the form.')
    // No backend — show success
    setSent(true)
  }
  return (
    <div className="container">
      <h2>Contact</h2>
      <p className="muted">Questions, bookings or just say hi — drop a message.</p>
      {!sent ? (
        <form onSubmit={submit} className="contact-form">
          <label>Name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></label>
          <label>Email<input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></label>
          <label>Message<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} /></label>
          <div className="row"><button className="btn" type="submit">Send</button></div>
        </form>
      ) : (
        <div className="notice">Thanks — we'll get back to you soon.</div>
      )}
    </div>
  )
}
