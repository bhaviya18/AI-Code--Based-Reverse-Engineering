

const AboutUs = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.box}>
        <section style={styles.headerSection}>
          <h1 style={styles.header}>About Jobsyn</h1>
          <p style={styles.subtitle}>
            Connecting talent with opportunities. Your career, our mission.
          </p>
        </section>

        <section style={styles.contentSection}>
          <h2 style={styles.sectionHeader}>Our Mission</h2>
          <p style={styles.text}>
            At Jobsync, our mission is to simplify the hiring process by creating a seamless
            bridge between job seekers and employers. Whether you&apos;re looking for your next
            big opportunity or the perfect candidate, Jobsyn is here to make it happen.
          </p>
        </section>

        <section style={styles.contentSection}>
          <h2 style={styles.sectionHeader}>What We Do</h2>
          <p style={styles.text}>
            Jobsync connects skilled professionals with top organizations. With advanced search
            features, personalized recommendations, and a user-friendly interface, we make job
            hunting and recruitment effortless.
          </p>
        </section>

        <section style={styles.contentSection}>
          <h2 style={styles.sectionHeader}>Our Values</h2>
          <ul style={styles.list}>
            <li>Innovation: Leveraging technology to enhance user experiences.</li>
            <li>Integrity: Building trust through transparency and accountability.</li>
            <li>Inclusivity: Promoting diversity and equal opportunities.</li>
          </ul>
        </section>

        <section style={styles.footerSection}>
          <h2 style={styles.footerHeader}>Join the Jobsyn Community</h2>
          <p style={styles.text}>
            Whether you&apos;re a job seeker or an employer, we&apos;re here to help you achieve your
            goals. Discover opportunities, connect with top talent, and take the next step with
            Jobsync.
          </p>
        </section>
      </div>
    </div>
  );
};

// Inline CSS for a clean, professional appearance
const styles = {
  outerContainer: {
    fontFamily: "'Roboto', sans-serif",
    lineHeight: 1.7,
    padding: "40px",
    background: "linear-gradient(to bottom right, #bf80ff, #7300e6)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#ffffff",
    background: "linear-gradient(to bottom right, #d9d9d9, #f2f2f2)",
    border: "1px solid #dee2e6",
    borderRadius: "15px",
    padding: "40px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    width: "100%",
    animation: "fadeIn 1.5s ease-out",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  header: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    fontStyle: "italic",
  },
  contentSection: {
    marginBottom: "30px",
  },
  sectionHeader: {
    fontSize: "1.8rem",
    color: "#34495e",
    fontWeight: "600",
    marginBottom: "15px",
    borderBottom: "2px solid #95a5a6",
    paddingBottom: "5px",
  },
  text: {
    fontSize: "1.1rem",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  list: {
    paddingLeft: "20px",
    color: "#2c3e50",
    listStyleType: "disc",
    fontSize: "1.1rem",
  },
  footerSection: {
    textAlign: "center",
    marginTop: "40px",
  },
  footerHeader: {
    fontSize: "2rem",
    color: "#2c3e50",
    fontWeight: "bold",
    marginBottom: "10px",
  },
};

// Scroll animation (CSS keyframes for fade-in)
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`, styleSheet.cssRules.length);

export default AboutUs;
