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
  import { useForm, isEmail, isNotEmpty } from "@mantine/form";
  import { useNavigate } from "react-router-dom";
  import LogoGama from "../img/logo.svg";
  import LogoGamaType from "../img/logotype.svg";

  // Import Icon
  import { GoogleButton } from "../Components/GoogleButton";
  import { useEffect, useState } from "react";
  import axios from "axios";

  function LoginPage() {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const form = useForm({
      initialValues: {
        login: "",
        password: "",
      },
      validate: {
        login: isEmail(),
        password: isNotEmpty(),
      },
    });

    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/v1/auth").then((data) => {
        setUrl(data.data.url);
      });
    }, []);

    const handleSubmit = async (values) => {
      console.log("Submitting form with values:", values); // Debugging log
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/v1/auth/login", {
          login: values.login,
          password: values.password,
        });

        console.log("Login berhasil:", response.data);
        
        // Simpan token ke localStorage
        localStorage.setItem('token', response.data.token);

        // Navigasi ke halaman beranda setelah login berhasil
        navigate('/');
      } catch (err) {
        console.log("Error response:", err.response); // Debugging log
        setError("Sepertinya ada yang salah. Silakan coba lagi.");
      }
    };

    return (
      <div className="register">
        <Flex className="register-hero" direction="column" align="center">
          <img src={LogoGama} alt="Logo Gama" className="gama-register" />
        </Flex>

        <Flex my="1.5rem" direction="column" gap="8" align="center">
          <Title className="register-title" order={3}>
            Selamat datang di GAMA
          </Title>
          <Text ta="center" size="sm" className="register-subtitle">
            Nikmati berbagai fitur dan layanan untuk membantu Anda mengelola
            sampah dengan lebih baik.
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
              {error}
            </Alert>
          )}

          <TextInput
            className="register-input"
            label="Email"
            withAsterisk
            mt="0.56rem"
            radius="xl"
            placeholder="email"
            {...form.getInputProps("login")}
          />

          <PasswordInput
            label="Password"
            withAsterisk
            className="register-input"
            mt="0.56rem"
            radius="xl"
            placeholder="Kata Sandi"
            {...form.getInputProps("password")}
          />

          <Anchor
            href="/lupa-sandi"
            target="_blank"
            ta="right"
            size="xs"
            fw={500}
            mt="xs"
            underline="never"
          >
            Lupa Kata Sandi?
          </Anchor>

          <Group justify="center" mt="md">
            <Button fullWidth radius="xl" color="#416835" type="submit">
              Masuk
            </Button>
          </Group>

          <Divider label="atau" labelPosition="center" my="sm" />

          <GoogleButton className="btn-google" fullWidth radius="xl">
            <Anchor<"a"> href={url} ta={"center"} size="sm" my={"sm"}>
              Masuk dengan Google
            </Anchor>
          </GoogleButton>

          <Group justify="center" align="center">
            <Text className="daftar-register" ta="center" size="xs" my="sm">
              Belum punya akun?{" "}
              <Anchor<"a"> href="/daftar" fw={500} underline="never">
                Daftar sebagai Pengguna
              </Anchor>
            </Text>
          </Group>
        </Box>

        <Text ta="center" mt="4.75rem" size="sm">
          Digital Waste Management
        </Text>
      </div>
    );
  }

  export default LoginPage;