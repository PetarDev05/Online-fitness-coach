import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Button,
  Preview,
} from "@react-email/components";

export default function ContactEmail({ name, email, message }) {
  return (
    <Html>
      <Head />
      <Preview>New message from your website</Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          
          <Heading as="h2" style={styles.heading}>
            New message from your website
          </Heading>

          <Text style={styles.subtitle}>
            You’ve received a new inquiry from your contact form.
          </Text>

          <Hr style={styles.hr} />

          <Section style={styles.card}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{name}</Text>

            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{email}</Text>

            <Text style={styles.label}>Message</Text>
            <Text style={styles.message}>{message}</Text>
          </Section>

          <Button
            href={`mailto:${email}`}
            style={styles.button}
          >
            Reply to client
          </Button>

          <Text style={styles.footer}>
            This email was generated from your website contact form.
          </Text>

        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f4f4f7",
    fontFamily: "Poppins, Arial, sans-serif",
    padding: "20px",
  },

  container: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "30px",
    maxWidth: "500px",
    margin: "0 auto",
  },

  heading: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#111",
  },

  subtitle: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },

  hr: {
    borderColor: "#e5e7eb",
    margin: "20px 0",
  },

  card: {
    backgroundColor: "#fafafa",
    padding: "15px",
    borderRadius: "8px",
  },

  label: {
    fontSize: "12px",
    color: "#888",
    marginTop: "10px",
  },

  value: {
    fontSize: "14px",
    color: "#111",
    marginBottom: "5px",
  },

  message: {
    fontSize: "14px",
    color: "#111",
    marginTop: "5px",
    whiteSpace: "pre-line",
  },

  button: {
    display: "block",
    marginTop: "25px",
    textAlign: "center",
    backgroundColor: "#000",
    color: "#fff",
    padding: "12px",
    borderRadius: "6px",
    textDecoration: "none",
  },

  footer: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#999",
    textAlign: "center",
  },
};