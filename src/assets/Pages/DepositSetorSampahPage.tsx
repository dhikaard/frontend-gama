import { useState, useEffect } from "react";
  import { useCounter } from '@mantine/hooks';
  import { DatePickerInput } from '@mantine/dates';
  import {
    Group,
    Button,
    Flex,
    Autocomplete,
    Container,
    Title,
    rem,
    Input,
    Alert,
    Avatar,
    Text,
  } from "@mantine/core";
  import { IconMapPin, IconCalendar, IconInfoCircle, IconPackage, IconNotebook, IconBottle,  IconPlus, IconMinus } from "@tabler/icons-react";


  
  

  function DepositSetorSampahPage() {
    const [value, setValue] = useState<Date | null>(null);
    const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

    const IconMap = (
      <IconMapPin
        stroke={2}
        style={{ width: rem("1.25rem"), height: rem("1.25rem") }}
      />
    );
    const IconInfo = (
      <IconInfoCircle
        stroke={2}
        style={{ width: rem("1.25rem"), height: rem("1.25rem") }}
      />
    );

    const BottleIcon =(
      <IconBottle
        stroke={2}
        style={{ color: "#1971C2"}}
      />
    );
    const PackageIcon =(
      <IconPackage
        stroke={2}
        style={{ color : "#7950F2"}}
      />
    );
    const PaperIcon =(
      <IconNotebook
        stroke={2}
        style={{ color : "#373A40" }}
      />
    );

    const PlusIcon = <IconPlus stroke={2} style={{ width: rem("1.25rem"), height: rem("1.25rem") }} />;
    const MinusIcon = <IconMinus stroke={2} style={{ width: rem("1.25rem"), height: rem("1.25rem") }} />;
  

    const [bankSampah, setBankSampah] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState("");

    // handleClose Allert
    const [showAlert, setShowAlert] = useState(true);
    const handleCloseAlert = () => setShowAlert(false);

    // Fetch nama bank sampah dari data local
    // useEffect(() => {
    //   fetch("https://dummyjson.com/products/categories")
    //     .then((res) => res.json())
    //     .then((data) => setBankSampah(data));
    // }, []);
    useEffect(() => {
      // setBankSampah(dataLocal);
    },[]);
  

    

    // Fungsi untuk melakukan pencarian
    // const filteredBankSampah = bankSampah.filter((item) =>
    //   item.toLowerCase().includes(searchValue.toLowerCase())
    // );
    const filteredBankSampah = bankSampah.map((item) => item.bank_sampah).filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );

    const produkData = [
      { nama: "Botol Plastik", logo: BottleIcon, bgColor: "#E7F5FF", counter: useCounter(0) },
      { nama: "Kardus", logo: PackageIcon,  bgColor: "#F3F0FF", counter: useCounter(0)  },
      { nama: "Kertas", logo: PaperIcon,  bgColor: "#F1F3F5", counter: useCounter(0) },
    ];

    return (
      <div className="setor-sampah">
        <Container display="flex" bg="#F8F9FA" h="3.75rem" className="header">
          <Title order={6} ta="center" lh="1.125rem" fw={600}>
            Metode Setor 
          </Title>
        </Container>
        <Flex className="main" direction="column" mt="1.5rem" mb="5rem">
        <DatePickerInput
      rightSection={icon}
      leftSectionPointerEvents="none"
      label="Antar Sendiri"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      
    />

        
          <Autocomplete
            className="InputSampah"
            label="Bank sampah point"
            description="Pilih bank sampah tujuan Anda."
            data={filteredBankSampah}
            value={searchValue}
            onChange={setSearchValue}
            rightSectionPointerEvents="none"
            rightSection={IconMap}
            comboboxProps={{ shadow: "md" }}
            withAsterisk
            pointer
          />

        </Flex>
      </div>
    );
  }

  export default DepositSetorSampahPage;