import { useState } from "react";


export default function Notes() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <div className="notes-page">

        <h1>Notes</h1>
        <p>Access all subject notes branch-wise</p>

        <button onClick={() => setOpen(true)} className="open-btn">
          Browse Notes
        </button>

        {open && <NotesModal onClose={() => setOpen(false)} />}

      </div>
    </Layout>
  );
}