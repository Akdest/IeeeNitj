export type CommitteeMember = {
    name: string;
    role: string;
    image: string;
    domain: string;
  };
  
  export const committeeMembers: CommitteeMember[] = [
    {
      name: "Aarav Mehta",
      role: "President",
      image: "/members/aarav.jpg",
      domain: "Core Team",
    },
    {
      name: "Neha Sharma",
      role: "Vice President",
      image: "/members/neha.jpg",
      domain: "Core Team",
    },
    {
      name: "Rohan Patel",
      role: "Technical Lead",
      image: "/members/rohan.jpg",
      domain: "Technical",
    },
    {
      name: "Simran Kaur",
      role: "Event Coordinator",
      image: "/members/simran.jpg",
      domain: "Management",
    },
    // Add more members here
  ];
  