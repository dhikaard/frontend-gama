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
} from "@mantine/core";
import {
  useForm,
  isEmail,
  isNotEmpty,
  hasLength,
  matchesField,
} from "@mantine/form";
import LogoGama from "../img/logo.svg";
import LogoGamaType from "../img/logotype.svg";

// Import Icon
import { GoogleButton } from "../Components/GoogleButton";
import { useEffect, useState } from "react";
import axios from "axios";

function LoginPage() {
  const [url, setUrl] = useState("");
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: hasLength({ min: 5 }),
      password: isNotEmpty(),
    },
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/auth")
      .then((data) => {
        setUrl(data.data.url);
      });
  }, []);

  return (
    <div className="register">
      <Flex className="register-hero" direction="column" align="center">
        <img src={LogoGama} alt="Logo Gama" className="gama-register" />
        <img src={LogoGamaType} alt="Gama" />
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
        onSubmit={form.onSubmit(() => {})}
      >
        <TextInput
          className="register-input"
          mt="0.56rem"
          radius="xl"
          placeholder="Username"
          {...form.getInputProps("username")}
        />

        <PasswordInput
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
            <Anchor<"a"> href="/masuk" fw={500} underline="never">
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
