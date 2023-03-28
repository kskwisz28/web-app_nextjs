import {useBreakpointIndex} from "@theme-ui/match-media";
import {useMemo} from "react";

const useBreakpoint = () => {
  const breakpointIndex = useBreakpointIndex()

  const isDesktop = useMemo(() => {
    return breakpointIndex >= 4
  }, [breakpointIndex])

  return {isDesktop}
}

export default useBreakpoint