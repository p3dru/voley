import React, { useEffect, useState } from 'react';

interface Member {
 id: string;
 name: string;
}

interface Team {
 id: string;
 name: string;
 members: Member[];
}

const TeamList: React.FC = () => {
 const [teams, setTeams] = useState<Team[]>([]);
 const [newMemberNames, setNewMemberNames] = useState<Record<string, string>>({});
 const [editingMemberId, setEditingMemberId] = useState<string | null>(null);

 useEffect(() => {
   console.log('Todos os times: ', teams);
 }, [teams]);

 const addTeam = (teamName: string) => {
 const newTeam: Team = {
 id: Date.now().toString(),
 name: teamName,
 members: [],
 };

 setTeams([...teams, newTeam]);
 };

 const addMember = (teamId: string) => {
 setTeams(teams.map((team) => {
 if (team.id === teamId) {
  const newMember: Member = {
    id: Date.now().toString(),
    name: newMemberNames[teamId],
  };

  return { ...team, members: [...team.members, newMember] };
 } else {
  return team;
 }
 }));

 setNewMemberNames({ ...newMemberNames, [teamId]: '' });
 };

 const editMember = (teamId: string, memberId: string, newName: string) => {
   setTeams(teams.map((team) => {
   if (team.id === teamId) {
    return {
      ...team,
      members: team.members.map((member) => {
        if (member.id === memberId) {
          return { ...member, name: newName };
        } else {
          return member;
        }
      }),
    };
   } else {
    return team;
   }
   }));
  };

 const startEditingMember = (memberId: string) => {
  setEditingMemberId(memberId);
 };

 const stopEditingMember = () => {
  setEditingMemberId(null);
 };

 const removeMember = (teamId: string, memberId: string) => {
   setTeams(teams.map((team) => {
   if (team.id === teamId) {
    return {
      ...team,
      members: team.members.filter((member) => member.id !== memberId),
    };
   } else {
    return team;
   }
   }));
  };

 return (
 <div>
 <button onClick={() => addTeam(`Time 1`)}>Criar Time</button>
 {teams.map((team, index) => (
  <div key={team.id}>
    <h2>{`Time ${index + 1}`}</h2>
    <input type="text" value={newMemberNames[team.id] || ''} onChange={(e) => setNewMemberNames({ ...newMemberNames, [team.id]: e.target.value })} />
    <button onClick={() => addMember(team.id)}>Adicionar Membro</button>
    {team.members.map((member) => (
      <div key={member.id}>
       {editingMemberId === member.id ? (
         <>
           <input type="text" value={member.name} onChange={(e) => editMember(team.id, member.id, e.target.value)} />
           <button onClick={stopEditingMember}>Salvar</button>
         </>
       ) : (
         <>
           <p>{member.name}</p>
           <button onClick={() => startEditingMember(member.id)}>Editar</button>
           <button onClick={() => removeMember(team.id, member.id)}>Remover Membro</button>
         </>
       )}
      </div>
    ))}
  </div>
 ))}
 [Criar lógica para salvar no banco de dados]
 [Criar botão para excluir time]
 [Criar botão para limpar todos]
 </div>
 );
};

export default TeamList;
