import {
  Alert,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Group,
  Overlay,
  Stack,
  Text,
  Transition,
} from "@mantine/core";
import { IconExclamationMark } from "@tabler/icons-react";
import { useState } from "react";
import Barcode from "react-barcode";
import { Link } from "react-router-dom";
import "./../css/ConfirmPage.css";
import { useClickOutside } from "@mantine/hooks";

const ConfirmPage = () => {
  const [isCloseAlert, setIsCloseAlert] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);
  const stylePopUp = {
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    position: "absolute",
    bottom: "0",
    zIndex: 100,
  };
  const ref = useClickOutside(() => {setIsSubmited(false)})

  const handleClickButtonSubmit = () => {
    setIsSubmited(!isSubmited);
  };

  const handleClickCloseAlert = () => {
    setIsCloseAlert(false);
  };

  const icon = <IconExclamationMark />;
  return (
    <div
      style={{
        width: "480px",
        height: "100vh",
        margin: "auto",
        overflowY: "hidden",
        position: "relative",
      }}
    >
      <Container size={"xs"} w={"100%"} h="100vh">
        {isCloseAlert && (
          <Alert
            title="Perhatian!"
            icon={icon}
            withCloseButton
            closeButtonLabel="Dismiss"
            mt={"12px"}
            onClick={handleClickCloseAlert}
          >
            Pastikan semua informasi sudah benar dan lengkap. Anda tidak dapat
            kembali ke halaman ini setelah menekan tombol "Ajukan".
          </Alert>
        )}
        <Transition
          mounted={isSubmited}
          transition={"fade"}
          duration={1000}
          timingFunction="ease"
          keepMounted
        >
          {(style) => (
            <Overlay
              bg={"#000"}
              opacity={0.15}
              style={{ ...style, zIndex: "-1" }}
            />
          )}
        </Transition>
        <Card
          mt={"12px"}
          mb={"54px"}
          padding="lg"
          radius="md"
          withBorder
          style={{
            zIndex: "-2",
          }}
        >
          <Text fw={"bold"} color="#25262B">
            Bank Sampah Point
          </Text>
          <Text color="#25262B">Bank Sampah Candi pawon</Text>
          <Text color="#495057" mb={"16px"}>
            Jl.Candi Pawon, Kota Semarang
          </Text>
          <Text fw={"bold"} color="#25262B">
            Jenis sampah
          </Text>
          <Group mt={"8px"} justify="space-between">
            <Text color="#495057">Botol Plastik</Text>
            <Text color="#495057">12 kg</Text>
          </Group>
          <Divider />
          <Group mt={"8px"} justify="space-between">
            <Text color="#495057">Kertas</Text>
            <Text color="#495057">12 kg</Text>
          </Group>
          <Divider />
          <Text fw={"bold"} mt={"16px"} color="#25262B">
            Metode Setor
          </Text>
          <Text color="#25262B">Antar Sendiri</Text>
          <Text color="#495057" mb={"16px"} size="sm">
            Akan tiba di bank sampah point pada tanggal 02/03/2024 - Jam 13:00
            WIB.
          </Text>
          <Text fw={"bold"} color="#25262B">
            Koin
          </Text>
          <Group mt={"8px"} justify="space-between">
            <Text color="#495057">Botol Plastik</Text>
            <Text color="#495057">12 kg</Text>
            <Text color="#495057">2 koin</Text>
          </Group>
          <Divider />
          <Group mt={"8px"} justify="space-between">
            <Text color="#495057">Kertas</Text>
            <Text color="#495057">12 kg</Text>
            <Text color="#495057">2 koin</Text>
          </Group>
          <Divider />
          <Group mt={"8px"} mb={"18px"} justify="space-between">
            <Text color="#495057">Total</Text>
            <Text color="#495057">4 koin</Text>
          </Group>
          <Divider size={"md"} variant="dashed" mb={"16px"} />
          <Center>
            <Barcode value="youtube.com" format="CODE128" />
          </Center>
        </Card>
        <Group mb={"44px"} justify="center">
          <Button w={"47%"} size="md" variant="outline" color="#416835">
            <Link to={"/"} style={{ color: "#416835" }}>
              Kembali
            </Link>
          </Button>
          <Button
            w={"47%"}
            size="md"
            color="#416835"
            onClick={handleClickButtonSubmit}
          >
            Ajukan
          </Button>
        </Group>
      </Container>
      <Transition
        mounted={isSubmited}
        transition={"slide-up"}
        duration={700}
        timingFunction="ease"
        keepMounted
      >
        {(style) => (
          <Container
          ref={ref}
            bg={"#fff"}
            w={"100%"}
            h={"70%"}
            style={{ ...style, ...stylePopUp }}
          >
            <Center>
              <hr
                style={{
                  width: "50%",
                  borderTop: "2px solid #ADB5BD",
                  margin: "0 auto 48px",
                  position: "absolute",
                  top: 24,
                  left: "50%",
                  transform: "translateX(-50%)",
                  cursor: "pointer",
                }}
              />
              <Stack>
                <img
                  src="/src/assets/img/Vector.png"
                  alt="Success"
                  style={{width: "150px", margin: "64px auto 54px " }}
                />
                <Text size={"xl"} fw={"bold"} color="#25262B" style={{textAlign: 'center'}}>
                  Pengajuan Berhasil!
                </Text>
                <Text color="#25262B" style={{textAlign: 'center'}}>
                  Harap periksa riwayat Anda secara berkala untuk mengetahui
                  perkembangan terbaru.
                </Text>
              </Stack>
            </Center>
          </Container>
        )}
      </Transition>
    </div>
  );
};

export default ConfirmPage;
