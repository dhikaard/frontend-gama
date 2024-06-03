import {
  TextInput,
  Button,
  Group,
  Box,
  Flex,
  Title,
  Text,
  PasswordInput,
  Divider,
  Anchor,
  Alert,
} from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import { useForm, isEmail, isNotEmpty, hasLength } from "@mantine/form";
import { useNavigate } from 'react-router-dom';
import LogoGama from "../img/logo.svg";
// Import Icon
import { GoogleButton } from "../Components/GoogleButton";
import { useEffect, useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      full_name: "",
      address: "",
      phone_number: "",
      email: "",
      password: "",
    },
    validate: { 
      full_name: hasLength({ min: 2, max: 45 }),
      address: isNotEmpty(),
      phone_number: hasLength({ min: 2, max: 15 }),
      email: isEmail(),
      password: isNotEmpty(),
    },
  });

  useEffect(() => {
    axios
      .get("https://admin.gama.fr.to/api/v1/auth")
      .then((data) => {
        setUrl(data.data.url);
      });
  }, []);

  const navigate = useNavigate();
  const handleSubmit = async (values) => {

    try {
      const response = await axios.post("https://admin.gama.fr.to/api/v1/auth/register", values);
      console.log("Registrasi berhasil:", response.data);
      navigate('/masuk');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.errors || "Registrasi gagal. Silakan coba lagi.");
      } else if (error.request) {
        setError("Tidak ada respon dari server. Silakan coba lagi.");
      } else {
        setError("Terjadi kesalahan dalam mengatur permintaan. Silakan coba lagi.");
      }
    }
  };

  return (
    <div className="register">
      <Flex className="register-hero" direction="column" align="center">
        <img src={LogoGama} alt="Logo Gama" className="gama-register" />
      </Flex>
      <Flex my="1.5rem" direction="column" gap="8" align="center">
        <Title className="register-title" order={3}>
          Daftar sebagai Pengguna
        </Title>
        <Text ta="center" size="sm" className="register-subtitle">
          Daftar dan bergabunglah menjadi masyarakat peduli lingkungan.
        </Text>
      </Flex>
      <Box
        component="form"
        maw={340}
        mx="auto"
        className="form-register"
        onSubmit={form.onSubmit(handleSubmit)}
      >
        {error && (
          <Alert
            className="alert"
            mb="sm"
            variant="light"
            color="red"
            radius="md"
            withCloseButton
            title="Perhatian!"
            icon={<IconAlertTriangle />}
            onClose={() => setError("")}
            lh="1rem"
          >
            {error.phone_number}
          </Alert>
        )}

        <TextInput
          className="register-input"
          label="Nama Lengkap"
          withAsterisk
          radius="xl"
          placeholder="cth. Ferdyan Steevandio"
          {...form.getInputProps("full_name")}
        />

        <TextInput
          className="register-input"
          label="Alamat tempat tinggal"
          withAsterisk
          mt="0.56rem"
          radius="xl"
          placeholder="cth. Ngaliyan, Kota Semarang"
          {...form.getInputProps("address")}
        />
        <TextInput
          className="register-input"
          label="No. WhatsApp"
          withAsterisk
          mt="0.56rem"
          radius="xl"
          placeholder="cth. 081234567890"
          {...form.getInputProps("phone_number")}
        />
        <TextInput
          className="register-input"
          label="Email"
          withAsterisk
          mt="0.56rem"
          radius="xl"
          placeholder="cth. user@gmail.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          className="register-input"
          label="Buat kata sandi"
          withAsterisk
          mt="0.56rem"
          radius="xl"
          placeholder="cth. #123Ri&8"
          {...form.getInputProps("password")}
        />
        <Group justify="center" mt="md">
          <Button fullWidth radius="xl" color="#416835" type="submit">
            Daftar sebagai Pengguna
          </Button>
        </Group>
        <Divider label="atau" labelPosition="center" my="xs" />

        <GoogleButton className="btn-google" fullWidth radius="xl">
          <Anchor<"a"> href={url} ta={"center"} size="sm" my={"sm"}>
            Daftar dengan Google
          </Anchor>
          Daftar dengan Google
        </GoogleButton>

        <Group justify="center" align="center">
          <Text className="daftar-register" ta="center" size="sm" my="sm">
            Sudah punya akun?{" "}
            <Anchor<"a"> href="/masuk" fw={500}>
              Masuk
            </Anchor>
          </Text>
        </Group>
      </Box>
    </div>
  );
}

export default RegisterPage;