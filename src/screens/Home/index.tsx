import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  const handleAddParticipant = () => {
    if (participants.includes(participantName)) {
      return Alert.alert("Erro!", "Participante já registrado!");
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Aviso!", `Deseja remover o participante: ${name}?`, [
      {
        text: "sim",
        onPress: () => {
          if (participants.includes(name)) {
            setParticipants((index) =>
              index.filter((participant) => participant !== name)
            );
            console.log("Participante removido!");
          }
        },
      },
      {
        text: "não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 19 de Janeiro de 2024.</Text>
      <View style={styles.participant}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não temos participantes? Adicone-os!
          </Text>
        )}
      />
    </View>
  );
}
