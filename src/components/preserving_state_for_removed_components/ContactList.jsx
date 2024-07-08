
export default function ContactList({
    selectedContact,
    contacts,
    onSelect
  }) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map(contact =>
            <li key={contact.id}>
              <button onClick={() => {
                onSelect(contact);
              }}>
                {contact.name}
                {selectedContact === contact ? ' ✅' : ''}
              </button>
            </li>
          )}
        </ul>
      </section>
    );
  }
  