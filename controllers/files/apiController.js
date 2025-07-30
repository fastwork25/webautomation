export async function getHello(req, res) {
  console.log(process.env.ONLYOFFICE_EMAIL, 'ONLYOFFICE_EMAIL');
  res.status(200).json({ message: 'Hello from Vercel!' });
}

export async function createToken(req, res) {
  const dataBody = req.body;
  try {
    const response = await fetch(`${process.env.ONLYOFFICE_API_URL}/api/2.0/authentication`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Kalau perlu token authorization:
        // 'Authorization': `Bearer ${process.env.ONLYOFFICE_API_TOKEN}`,
      },
      body: JSON.stringify(dataBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: 'Gagal ambil token dari OnlyOffice API',
        detail: errorText,
      });
    }

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    console.error('createToken error:', error);
    res.status(500).json({ error: 'Internal Server Error', detail: error.message });
  }
}


export async function createFile(req, res) {
  const dataBody = req.body;
  try {
    const response = await fetch(`${process.env.ONLYOFFICE_API_URL}/api/2.0/files/${req.params.folderId}/file`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Kalau perlu token authorization:
        'Authorization': req.headers.authorization,
      },
      body: JSON.stringify(dataBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: 'Gagal ambil token dari OnlyOffice API',
        detail: errorText,
      });
    }

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    console.error('createToken error:', error);
    res.status(500).json({ error: 'Internal Server Error', detail: error.message });
  }
}

export async function openEdit(req, res) {
  const dataBody = req.body;
  try {
    const response = await fetch(`${process.env.ONLYOFFICE_API_URL}/api/2.0/files/file/${req.params.fileId}/openedit`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Kalau perlu token authorization:
        'Authorization': req.headers.authorization,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: 'Gagal ambil token dari OnlyOffice API',
        detail: errorText,
      });
    }

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    console.error('createToken error:', error);
    res.status(500).json({ error: 'Internal Server Error', detail: error.message });
  }
}


export async function createRoom(req, res) {
  const dataBody = req.body;
  try {
    const response = await fetch(`${process.env.ONLYOFFICE_API_URL}/api/2.0/files/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Kalau perlu token authorization:
        'Authorization': req.headers.authorization,
      },
      body: JSON.stringify(dataBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: 'Gagal ambil token dari OnlyOffice API',
        detail: errorText,
      });
    }

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    console.error('createToken error:', error);
    res.status(500).json({ error: 'Internal Server Error', detail: error.message });
  }
}


export async function readRoom(req, res) {
  const dataBody = req.body;
  try {
    const response = await fetch(`${process.env.ONLYOFFICE_API_URL}/api/2.0/files/rooms`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Kalau perlu token authorization:
        'Authorization': req.headers.authorization,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: 'Gagal ambil token dari OnlyOffice API',
        detail: errorText,
      });
    }

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    console.error('createToken error:', error);
    res.status(500).json({ error: 'Internal Server Error', detail: error.message });
  }
}
