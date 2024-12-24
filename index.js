```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    //Instead of shallow routing, manage query parameters explicitly
    const query = router.query; //get the current query parameters
    router.push('/contact', query); 
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact Page</button>
    </div>
  );
}
```
```javascript
//pages/contact.js
import { useRouter } from 'next/router';

export default function Contact(){
  const router = useRouter();
  return(
    <div><h1>Contact Page</h1><p>query:{JSON.stringify(router.query)}</p></div>
  );
}
```