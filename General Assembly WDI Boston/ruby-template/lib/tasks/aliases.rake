# frozen_string_literal: true

desc 'Improve style'
task nag: :rubocop

desc 'Fix linter errors'
task make_standard: :rubocop_fix

desc 'lint'
task default: %i[nag]
