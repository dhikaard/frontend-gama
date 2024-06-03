import React, { useState, useEffect } from "react";
import { useCounter } from "@mantine/hooks";
import {
  Group,
  Button,
  Flex,
  Container,
  Text,
  Card,
  Image,
} from "@mantine/core";
import {
  IconPackage,
  IconNotebook,
  IconBottle,
  IconRecycle,
  IconExchange,
  IconHome,
  IconHistory,
  IconUser,
} from "@tabler/icons-react";
import Gambar1 from "../img/img.png";
import Gambar2 from "../img/Image Item.png";
import { Link } from "react-router-dom";
import axios from "axios";

const dataLocal = [
  {
    bank_sampah: "Bank Sampah 1",
    item_sampah: "bottle ,cardboard, paper",
    location: "Suite 55",
  },
  {
    bank_sampah: "Bank Sampah 2",
    item_sampah: "paper, bottle",
    location: "PO Box 41613",
  },
  {
    bank_sampah: "Bank Sampah 3",
    item_sampah: "bottle",
    location: "PO Box 50058",
  },
  {
    bank_sampah: "Bank Sampah 4",
    item_sampah: "paper",
    location: "8th Floor",
  },
  {
    bank_sampah: "Bank Sampah 5",
    item_sampah: "paper, cardboard",
    location: "PO Box 57936",
  },
];

function HomePage() {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const today = new Date();
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    setCurrentDate(today.toLocaleDateString("id-ID", options));
  }, []);

  const [username, setUsername] = useState({});
  const [wallet, setWallet] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('https://admin.gama.fr.to/api/v1/profile/wallet', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(data => {
      console.log(data.data.user.full_name);
      console.log(data.data.wallet.balance);
      setUsername(data.data.user);
      setWallet(data.data.wallet);
    })
    .catch(err => console.log(err));
  }, [username])

  return (
    <div className="home-page">
      <Flex className="main" direction="column" mt="1.5rem" mb="1.5rem">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section className="text-background">
            <Flex>
              <Text fw={500} size="lg" mr="0.5rem">
                Hai,
              </Text>
              <Text fw={700} size="lg" mb="sm">{username.full_name}</Text>
            </Flex>
            <Group justify="space-between" mb="0.25rem">
              <Flex align="center">
                <Text size="1.5rem" fw={600} lh="120%" mr="8px">
                {wallet.balance * 100}
                </Text>
                <Text size="md">Koin</Text>
              </Flex>
              <Text size="1.5rem" fw={600} lh="120%" mr="8px">
                =
              </Text>
              <Flex align="center">
                <Text size="1.5rem" fw={600} lh="120%" mr="8px">
                  {wallet.balance}
                </Text>
                <Text size="md">IDR</Text>
              </Flex>
            </Group>
          </Card.Section>
          <Card.Section className="text-card" color="#000">
            <Text size="md" px="1rem" py="1rem" fw={400}>
              {currentDate}
            </Text>
          </Card.Section>
        </Card>
      </Flex>

      <Container>
        <Group pos="apart" mb="1rem" justify="space-between">
          <Text size="md">Layanan</Text>
          <Button
            variant="subtle"
            color="#416835"
          >
            Lihat Semua
          </Button>
        </Group>
        <Group pos="center" spacing="lg">
          <Button
            leftIcon={<IconRecycle stroke={2} />}
            variant="subtle"
            radius="md"
            size="sm"
            styles={{
              root: {
                backgroundColor: "#E6FCF5",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid #E6FCF5",
              },
              inner: {
                display: "flex",
                alignItems: "center",
                color: "#228B22",
              },
              icon: {
                marginRight: "8px",
                color: "#228B22",
              },
            }}
          >
            Setor Sampah
          </Button>
          <Button
            leftIcon={<IconExchange stroke={2} />}
            variant="subtle"
            radius="md"
            size="sm"
            styles={{
              root: {
                backgroundColor: "#E7F5FF",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid #E7F5FF",
              },
              inner: {
                display: "flex",
                alignItems: "center",
                color: "#1E90FF",
              },
              icon: {
                marginRight: "8px",
                color: "#1E90FF",
              },
            }}
          >
            Penukaran
          </Button>
        </Group>
      </Container>

      <Container mt="2rem">
        <Group pos="apart" mb="1rem">
          <Text size="md">Event</Text>
          <Button
            variant="subtle"
            style={{ color: "#416835" }}
          >
            Lihat Semua
          </Button>
        </Group>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Image
            src={Gambar1}
            height={160}
            alt="Event"
          />
        </Card>
      </Container>

      <Container mt="2rem">
        <Group pos="apart" mb="1rem">
          <Text size="md">Artikel</Text>
          <Button
            variant="subtle"
            style={{ color: "#416835" }}
          >
            Lihat Semua
          </Button>
        </Group>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Image
            src={Gambar2}
            height={160}
            alt="Artikel"
          />
          <Text mt="md" size="lg" fw={700}>
            Sampah botol di laut?
          </Text>
        </Card>
      </Container>

      {/* Navigation Buttons */}
      <Flex
          justify="space-around"
          align="center"
          style={{
            position: "fixed",
            bottom: 0,
            width: "25.75rem",
            backgroundColor: "#fff",
            padding: "10px 0",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Button
            variant="subtle"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#416835",
            }}
          >
            <IconHome size={24} />
            <Text size="xs"><Link to={'/'} style={{color: "#737373"}}>Beranda</Link></Text>
          </Button>
          <Button
            variant="subtle"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#737373",
            }}
          >
            <IconHistory size={24} />
            <Text size="xs"><Link to={'/riwayat'} style={{color: "#737373"}}>Riwayat</Link></Text>
          </Button>
          <Button
            variant="subtle"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#737373",
            }}
          >
            <IconUser size={24} />
            <Text size="xs"><Link to={'/akun'} style={{color: "#737373"}}>Akun</Link></Text>
          </Button>
        </Flex>
    </div>
  );
}

export default HomePage;
