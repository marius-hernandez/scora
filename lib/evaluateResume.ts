// utils/evaluateResume.ts

export function evaluateResume(resumeText: string){
    let score = 0;

    // Length Criteria
    let wordCount = resumeText.split(/\s+/).length 
    wordCount = Math.min(5, Math.floor(wordCount / 100)); // Max 5 points for length
    // // Keywords Criteria
    const keywords = [
        /manage[s|d|ing|r]?/i,
        /graphic design|design|visual/i,
        /mentor[s|ed|ing]?/i,
        /supervis[ed|es|ing]?/i,
        /market share|marketing|marketer|market research/i
    ];
    
    let keywordScore = 0;
    keywords.forEach((keyword) => {
        if (keyword.test(resumeText)) {
            keywordScore += 2;
        }
    });
    keywordScore += Math.min(10, keywordScore); // Max 10 points for keywords

    // // Education Criteria
    // const educationKeywords = /bachelor|master|phd/i;
    // if (educationKeywords.test(resumeText)) {
    //     score += 5; // 5 points if degree is found
    // }

    // // Experience Criteria (assuming a simple check for "years" or relevant terms)
    // const experiencePattern = /(\d+)\s+years/i;
    // const experienceMatch = resumeText.match(experiencePattern);
    // if (experienceMatch && parseInt(experienceMatch[1]) >= 2) {
    //     score += 5; // 5 points for 2+ years of experience
    // }

    return [wordCount, keywordScore];
}



