import {
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
  Timeline,
  rem,
} from "@mantine/core";
import Barcode from "react-barcode";
import { useState } from "react";
import "./../img/Vector.png";
import { useClickOutside } from "@mantine/hooks";

const Historypage = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const ref = useClickOutside(() => setIsSubmited(false));


  return (
    <div className="confirm-page">
      <Container display="flex" bg="#F8F9FA" h="3.75rem" className="header">
        <Title order={6} ta="center" lh="1.125rem" fw={600}>
        23CODE-KM
        </Title>
      </Container>
      <Card
        shadow="sm"
        padding={"lg"}
        radius={"md"}
        withBorder
        className="card"
      >
        <Stack>
          <Title size={"sm"} fw={600} className="card-header">
            Bank Sampah Point
          </Title>
          <Text size="sm" lh={"4px"}>
            Bank Sampah Candi Pawon
          </Text>
          <Text size="sm" color="#495057">
            Jl. Candi Pawon, Kota Semarang
          </Text>
        </Stack>
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
              <Text size="sm" lh={"4px"} color="#495057">
                kg
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
              <Text size="sm" lh={"4px"} color="#495057">
                kg
              </Text>
            </Group>
          </Group>
          <Divider />
        </Stack>
        <Stack mt={"16px"}>
          <Title size={"sm"} fw={600} className="card-header">
            Bank Sampah Point
          </Title>
          <Text size="sm" lh={"3px"}>
            Antar Sendiri
          </Text>
          <Text size="sm" color="#495057">
            Akan tiba di bank sampah point pada tanggal 02/03/2024 - Jam 13:00
            WIB.
          </Text>
        </Stack>
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
              <Text size="sm" lh={"4px"} color="#495057">
                kg
              </Text>
            </Group>
            <Group>
              <Text size="sm" lh={"4px"}>
                12
              </Text>
              <Text size="sm" lh={"4px"} color="#495057">
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
              <Text size="sm" lh={"4px"} color="#495057">
                kg
              </Text>
            </Group>
            <Group>
              <Text size="sm" lh={"4px"}>
                12
              </Text>
              <Text size="sm" lh={"4px"} color="#495057">
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
              <Text size="sm" lh={"4px"} color="#495057">
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
              
             
            </Group>
          </Container>
        )}
      </Transition>

      <Container className="timeline">  
      <text >
          status pengajuam
      </text>
     
      <Timeline radius="lg" active={2} bulletSize={25}>
        <Timeline.Item title="Pengajuan terkirim.">
          <Text c="dimmed" size="sm">
          Anda berhasil mengirim pengajuan setor sampah pada bank sampah X. <br />
           <span className="waktu">11:34 WIB, 02/03/2024</span>
          </Text>
        </Timeline.Item>
        <Timeline.Item title="Menunggu konfirmasi." >
          <Text c="dimmed" size="sm">
          Tunggu petugas bank sampah untuk mengonfirmasi pengajuan Anda.
          </Text>
        </Timeline.Item>
      </Timeline>
      </Container>
    </div>
  );
};

export default Historypage;

