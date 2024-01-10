const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];
  
  export default function List() {
    const chemists = people.filter(({ profession }) => profession === 'chemist');
    const listItems = chemists.map(({ name, id }) => <li key={id}>{name}</li>);
    return <ul>{listItems}</ul>;
  }
