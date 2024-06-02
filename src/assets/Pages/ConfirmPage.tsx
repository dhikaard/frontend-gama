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
  Title,
  Transition,
  Flex
} from "@mantine/core";
import Barcode from "react-barcode";
import { IconExclamationCircle } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./../img/Vector.png";
import { useClickOutside } from "@mantine/hooks";

const ConfirmPage = () => {
  const icon = <IconExclamationCircle />;
  const [isCloseAlert, setIsCloseAlert] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);
  const ref = useClickOutside(() => setIsSubmited(false));

  const handleClickSubmit = () => {
    setIsSubmited(true);
  };

  const handleClickClosePopUp = () => {
    setIsSubmited(false);
  };

  return (
    <div className="confirm-page">
      <Container display="flex" bg="#F8F9FA" h="3.75rem" className="header">
        <Title order={6} ta="center" lh="1.125rem" fw={600}>
          Konfirmasi
        </Title>
      </Container>
      {isCloseAlert && (
        <Alert
          variant="light"
          color="blue"
          title="Perhatian!"
          withCloseButton
          className="alert-info"
          icon={icon}
          onClick={() => {setIsCloseAlert(false)}}
          lh="1rem"
        >
          Pastikan semua informasi sudah benar dan lengkap. Anda tidak dapat
          kembali ke halaman ini setelah menekan tombol "Ajukan".
        </Alert>
      )}
      <Card
        shadow="sm"
        padding={"lg"}
        radius={"md"}
        withBorder
        className="card"
      >
        <Flex direction="column">
          <Title size={"sm"} fw={600} mb="0.25rem" className="card-header">
            Bank Sampah Point
          </Title>
          <Text size="sm" lh={"1rem"}>
            Bank Sampah Candi Pawon
          </Text>
          <Text size="sm" color="#868E96" lh="1rem">
            Jl. Candi Pawon, Kota Semarang
          </Text>
        </Flex>
        <Stack mt={"16px"}>
          <Title size={"sm"} fw={600} className="card-header">
            Jenis Sampah
          </Title>
          <Group justify="space-between">
            <Text size="sm" lh={"4px"}>
              Botol Plastik
            </Text>
            <Group>
              <Text size="sm" lh={"4px"}>
                12
              </Text>
              <Text size="sm" lh={"4px"} color="#868E96">
                Kg
              </Text>
            </Group>
          </Group>
          <Divider />
          <Group justify="space-between">
            <Text size="sm" lh={"4px"}>
              Kertas
            </Text>
            <Group>
              <Text size="sm" lh={"4px"}>
                12
              </Text>
              <Text size="sm" lh={"4px"} color="#868E96">
                Kg
              </Text>
            </Group>
          </Group>
          <Divider />
        </Stack>
        <Flex mt={"16px"} direction="column">
          <Title size={"sm"} fw={600} className="card-header" mb="0.25rem">
            Metode Setor
          </Title>
          <Text size="sm" lh={"0.875rem"}>
            Antar Sendiri
          </Text>
          <Text size="xs" color="#495057" >
            Akan tiba di bank sampah point pada tanggal 02/03/2024 - Jam 13:00
            WIB.
          </Text>
        </Flex>
        <Stack mt={"16px"}>
          <Title size={"sm"} fw={600} className="card-header">
            Koin  
          </Title>
          <Group justify="space-between">
            <Text size="sm" lh={"4px"}>
              Botol Plastik
            </Text>
            <Group>
              <Text size="sm" lh={"4px"}>
                12
              </Text>
              <Text size="sm" lh={"4px"} color="#868E96">
                Kg
              </Text>
            </Group>
            <Group>
              <Text size="sm" lh={"4px"}>
                100
              </Text>
              <Text size="sm" lh={"4px"} color="#868E96">
                Koin
              </Text>
            </Group>
          </Group>
          <Divider />
          <Group justify="space-between">
            <Text size="sm" lh={"4px"}>
              Botol Plastik
            </Text>
            <Group>
              <Text size="sm" lh={"4px"}>
                12
              </Text>
              <Text size="sm" lh={"4px"} color="#868E96">
                Kg
              </Text>
            </Group>
            <Group>
              <Text size="sm" lh={"4px"}>
                100
              </Text>
              <Text size="sm" lh={"4px"} color="#868E96">
                Koin
              </Text>
            </Group>
          </Group>
          <Divider />
          <Group justify="space-between">
            <Text size="sm" lh={"4px"}>
              Total
            </Text>
            <Group>
              <Text size="sm" lh={"4px"}>
                -12
              </Text>
              <Text size="sm" lh={"4px"} color="#868E96">
                Koin
              </Text>
            </Group>
          </Group>
          <Divider variant="dashed" size={"md"} mt={"16px"} mb={"16px"} />
        </Stack>
        <Barcode value="youtube.com" height={"36px"} fontSize={"16px"} />
      </Card>
      <Group
        grow
        className="NavigationGroup"
        display="flex"
        justify="center"
        align="center"
        ml={"1rem"}
        mr={"1rem"}
        mt={"32px"}
        pb={"54px"}
      >
        <Button
          className="NavigationBtn"
          variant="outline"
          color="#416835"
          radius="md"
          size="md"
          w="8rem"
          fullWidth
        >
          <Link to={"/"} style={{ color: "#416835" }}>
            Kembali
          </Link>
        </Button>
        <Button
          className="NavigationBtn"
          variant="filled"
          color="#416835"
          radius="md"
          size="md"
          w="8rem"
          fullWidth
          onClick={handleClickSubmit}
        >
          Ajukan
        </Button>
      </Group>
      <Transition
        mounted={isSubmited}
        transition={"fade"}
        // duration={800}
        timingFunction="ease"
        keepMounted
      >
        {(style) => (
          <Overlay
            color="#000"
            opacity={0.15}
            zIndex={2}
            style={style}
            h={"100%"}
          />
        )}
      </Transition>
      <Transition
        mounted={isSubmited}
        transition={"slide-up"}
        duration={800}
        timingFunction="ease"
        keepMounted
      >
        {(style) => (
          <Container
            ref={ref}
            className="popup-confirm"
            bg="white"
            pos={"fixed"}
            style={style}
          >
            <Divider size={"md"} w={"100px"} m={"24px auto 48px"} />
            <Center>
              <img
                src="/src/assets/img/Vector.png"
                alt="Done"
                style={{ margin: "auto" }}
              />
            </Center>
            <Center mt={"40px"}>
              <Title size={"sm"} fw={600}>
                Jenis Sampah
              </Title>
            </Center>
            <Center mt={"24px"}>
              <Text size="md" ta={"center"} color="#495057">
                Harap periksa riwayat Anda secara berkala untuk mengetahui
                perkembangan terbaru.
              </Text>
            </Center>
            <Group
              grow
              className="NavigationGroup"
              display="flex"
              justify="center"
              align="center"
              ml={"1rem"}
              mr={"1rem"}
              mt={"106px"}
            >
              <Button
                className="NavigationBtn"
                variant="outline"
                color="#416835"
                radius="md"
                size="md"
                w="8rem"
                fullWidth
                onClick={handleClickClosePopUp}
              >
                Cek Riwayat
              </Button>
              <Button
                className="NavigationBtn"
                variant="filled"
                color="#416835"
                radius="md"
                size="md"
                w="8rem"
                fullWidth
              >
                Ke Beranda
              </Button>
            </Group>
          </Container>
        )}
      </Transition>
    </div>
  );
};

export default ConfirmPage;
