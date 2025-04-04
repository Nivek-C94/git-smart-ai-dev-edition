let trialCredits: Record<string, number> = {}

export function getTrialUsage(id: string) {
  if (!(id in trialCredits)) trialCredits[id] = 10
  return trialCredits[id]
}

export function consumeTrial(id: string) {
  if (!(id in trialCredits)) trialCredits[id] = 10
  if (trialCredits[id] <= 0) return false
  trialCredits[id]--
  return true
}