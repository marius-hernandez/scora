import {ScoraType } from "@/types/ScoraType";

export function evaluateResume(resumeText: string): ScoraType {
  // Length Criteria
  let lengthRaw = resumeText.split(/\s+/).length;
  const length = Math.min(5, Math.floor(lengthRaw / 100)); // Max 5 points for length

  // // Keywords Criteria
  let keywordRaw = 0;
  const keywords = [
    /manage[s|d|ing|r]?/gi,
    /graphic design|design|visual/gi,
    /mentor[s|ed|ing]?/gi,
    /supervis[ed|es|ing]?/gi,
    /market share|marketing|marketer|market research/gi,
  ];

  keywords.forEach((keyword) => {
    const matches = resumeText.match(keyword);
    if (matches) {
      keywordRaw += matches.length * 2; // 2 points for each occurrence
    }
  });
  const keyword = Math.min(10, keywordRaw); // Max 10 points for keywords

  // Education Criteria
  let educationRaw = 0;
  const educationKeywords = [
    /bs | bachelor['s]?/gi,
    /master['s]?/gi,
    /phd|doctorate/gi,
  ];
  educationKeywords.forEach((education) => {
    const matches = resumeText.match(education);
    if (matches) {
      educationRaw += matches.length * 5; // 5 points for each occurrence
    }
  });
  const education = Math.min(5, educationRaw); // Max 5 points for keywords

  // Experience Criteria (assuming a simple check for "years" or relevant terms)
  let experienceRaw = 0;
  const experiencePattern = /(\d+)\s*years?|(\d+)\s*yrs?/i; // Matches "year", "years", "yr", "yrs", with or without space
  const experienceMatch = resumeText.match(experiencePattern);
  if (experienceMatch) {
    const years = experienceMatch[1] || experienceMatch[2]; // Get the matched number
    if (parseInt(years) >= 2) {
      experienceRaw += 5;
    }
  }
  const experience = Math.min(5, experienceRaw); // Max 5 points for experience

  const scora = ((length + keyword + education + experience) / 25) * 100;
  const raw = { lengthRaw, keywordRaw, educationRaw, experienceRaw };
  const scoraFinal = { scora:[scora,scora], length: [lengthRaw, length], keyword:[keywordRaw, keyword], education:[educationRaw,education], experience:[experienceRaw, experience] };
  return scoraFinal;
}
