export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // Save the data to a text file or any other storage mechanism
    // For simplicity, we'll just log the data here
    console.log('Data received:', { name, email });

    // Respond with a success message
    res.status(200).json({ message: 'Data saved successfully.' });
  } else {
    // Return an error for unsupported request methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
