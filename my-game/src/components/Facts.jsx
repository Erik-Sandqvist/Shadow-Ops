// FILE: Facts.jsx
export default function Facts() {
  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Password Hygiene: Best Practices for Strong and Secure Passwords</h2>
      <p>
        Maintaining good password hygiene is essential for protecting your personal and professional data. Poor password habits are one of the most common reasons behind security breaches. Below are some key guidelines to help you understand and practice strong password hygiene.
      </p>
      <h3>What Is a Strong Password?</h3>
      <p>A strong password is one that is difficult to guess or crack, even by automated tools. It should:</p>
      <ul>
        <li>Be at least 12 characters long</li>
        <li>Include a mix of uppercase and lowercase letters</li>
        <li>Contain numbers and special characters (e.g., !, @, #, $)</li>
        <li>Avoid easily guessable information such as your name, birthdate, or common words</li>
      </ul>
      <h3>Examples of Strong Passwords:</h3>
      <ul>
        <li>L7f$z@19Qw#eT!p</li>
        <li>gR8&k!Zb#03xL1@</li>
        <li>Wn9*Tp#Xq$e2Vz!</li>
      </ul>
      <h3>Why You Should Never Share Your Password</h3>
      <p>
        Even if you trust someone, sharing your password increases the risk of misuse, accidental data exposure, or becoming the victim of a phishing attack. Passwords are like keys — once shared, you lose control over their use.
      </p>
      <h3>Key Reasons Not to Share Passwords:</h3>
      <ul>
        <li>Accountability: Shared credentials make it hard to trace actions back to individuals.</li>
        <li>Security: Shared passwords are more likely to be reused or stored insecurely.</li>
        <li>Compliance: Many organizations have strict policies against password sharing for legal and regulatory reasons.</li>
      </ul>
      <p>
        If access needs to be shared, consider using role-based permissions or secure password managers that support shared access without revealing the password itself.
      </p>
    </div>
  );
}