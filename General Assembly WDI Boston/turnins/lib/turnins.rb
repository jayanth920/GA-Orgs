require 'octokit'
require 'pry'

class Turnins
  BASE_ACCOUNT = 'ga-wdi-boston'
  STUDENT_ACCOUNTS = %w{MaxBlaushild
                        kbondanza
                        annie-b
                        asbren13
                        lady3bean
                        abroccoli
                        RDegnen
                        idelairre
                        Katyf
                        jcyeathatsme
                        brandonkoo
                        caitlynl22
                        HelixPenguin
                        jrutledg
                        goodeats
                        cgpacifico
                        npupillo
                        dstop75
                        LookOut800
                        hthi
                        catiffles
                        tys1019
                        villanagi89
                        J-Weeks
                        kevin2098 }
  def initialize
    if ARGV[0].nil?
      abort("Usage: turnins REPONAME")
    end

    base_repo = BASE_ACCOUNT + '/' + ARGV[0]

    open_prs = Octokit.pull_requests base_repo, state: 'open'
    closed_prs = Octokit.pull_requests base_repo, state: 'closed'
    pull_requests = open_prs + closed_prs
    who_turned_in = pull_requests.map {|pr| pr[:user][:login] }

    puts STUDENT_ACCOUNTS - who_turned_in
  end
end
